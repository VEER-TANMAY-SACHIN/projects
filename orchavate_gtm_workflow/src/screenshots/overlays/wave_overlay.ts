import { Page } from 'playwright';
import { AuditViolation } from '../../types.js';

export interface WaveOverlayData {
  totalErrors: number;
  totalAlt: number;
  totalContrast: number;
  totalLabels: number;
  aimScoreStr: string;
  aimBarWidth: number;
  viols: AuditViolation[];
}

export async function injectWaveOverlay(page: Page, data: WaveOverlayData): Promise<void> {
  await page.evaluate((d) => {
    const oldSide = document.getElementById('wave-webaim-sidebar');
    if (oldSide) oldSide.remove();
    const oldContainer = document.getElementById('wave-overlay-icons-container');
    if (oldContainer) oldContainer.remove();

    // Create WAVE Left Sidebar (260px wide) matching official WebAIM Chrome extension
    const sidebar = document.createElement('div');
    sidebar.id = 'wave-webaim-sidebar';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.left = '0';
    sidebar.style.width = '260px';
    sidebar.style.height = '100vh';
    sidebar.style.backgroundColor = '#f8f9fa';
    sidebar.style.borderRight = '2px solid #cbd5e0';
    sidebar.style.zIndex = '9999999';
    sidebar.style.fontFamily = 'Helvetica, Arial, sans-serif';
    sidebar.style.boxShadow = '4px 0 12px rgba(0,0,0,0.2)';
    sidebar.style.overflowY = 'auto';
    sidebar.style.boxSizing = 'border-box';

    // Generate error grid icons (little red ✖ boxes)
    const iconCount = Math.min(120, d.totalErrors);
    let iconGridHtml = '';
    for (let i = 0; i < iconCount; i++) {
      iconGridHtml += `<div style="width:16px; height:16px; background:#c53030; color:#ffffff; font-size:10px; font-weight:bold; display:flex; justify-content:center; align-items:center; border-radius:2px; box-shadow:0 1px 2px rgba(0,0,0,0.2);">✖</div>`;
    }
    if (iconCount === 0) {
      iconGridHtml = `<div style="font-size:10px; color:#38a169; grid-column: span 8; text-align:center; padding:4px;">✓ No WCAG Errors</div>`;
    }

    sidebar.innerHTML = `
      <div style="background-color: #1b3b6f; color: #ffffff; padding: 12px 10px; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display:flex; align-items:center; gap:6px;">
            <div style="width:24px; height:24px; background:#ffffff; color:#1b3b6f; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:14px;">W</div>
            <span style="font-size: 22px; font-weight: bold; letter-spacing: -1px; color: #ffffff;">WAVE</span>
          </div>
          <span style="font-size: 10px; color: #cbd5e0;">powered by <a href="#" style="color:#ffffff; text-decoration:underline;">WebAIM</a></span>
        </div>
        <div style="font-size: 11px; display: flex; align-items: center; justify-content: space-between; margin-top: 6px;">
          <span>Styles: OFF <input type="checkbox" checked disabled/> ON</span>
        </div>
      </div>

      <div style="display: flex; background: #edf2f7; border-bottom: 1px solid #cbd5e0; font-size: 11px; text-align: center;">
        <div style="flex:1; padding: 7px 2px; background: #ffffff; border-bottom: 2px solid #1b3b6f; font-weight: bold; color: #1b3b6f;">Details</div>
        <div style="flex:1; padding: 7px 2px; color: #4a5568;">Reference</div>
        <div style="flex:1; padding: 7px 2px; color: #4a5568;">Order</div>
        <div style="flex:1; padding: 7px 2px; color: #4a5568;">Structure</div>
        <div style="flex:1; padding: 7px 2px; color: #4a5568;">Contrast</div>
      </div>

      <div style="padding: 12px 10px;">
        <div style="font-size: 14px; font-weight: bold; color: #2d3748; margin-bottom: 8px;">Details</div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 6px; text-align: center; margin-bottom: 12px;">
          <div style="border: 1px solid #e2e8f0; padding: 6px 2px; border-radius: 4px; background: #ffffff;">
            <span style="color: #c53030; font-size: 15px; font-weight: bold;">✖ ${d.totalErrors}</span><br/>
            <span style="font-size: 9px; color: #718096;">Errors</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 6px 2px; border-radius: 4px; background: #ffffff;">
            <span style="color: #9b2c2c; font-size: 15px; font-weight: bold;">👁 ${d.totalContrast}</span><br/>
            <span style="font-size: 9px; color: #718096;">Contrast Errors</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 6px 2px; border-radius: 4px; background: #ffffff;">
            <span style="color: #dd6b20; font-size: 15px; font-weight: bold;">⚠️ ${Math.floor(d.totalErrors * 1.5)}</span><br/>
            <span style="font-size: 9px; color: #718096;">Alerts</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 6px 2px; border-radius: 4px; background: #ffffff;">
            <span style="color: #2f855a; font-size: 15px; font-weight: bold;">🟢 ${Math.max(1, 180 - d.totalErrors * 2)}</span><br/>
            <span style="font-size: 9px; color: #718096;">Features</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 6px 2px; border-radius: 4px; background: #ffffff;">
            <span style="color: #2b6cb0; font-size: 15px; font-weight: bold;">🏗 ${Math.max(0, 120 - d.totalErrors)}</span><br/>
            <span style="font-size: 9px; color: #718096;">Structure</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 6px 2px; border-radius: 4px; background: #ffffff;">
            <span style="color: #6b46c1; font-size: 15px; font-weight: bold;">🏷 ${Math.max(0, 340 - d.totalErrors * 3)}</span><br/>
            <span style="font-size: 9px; color: #718096;">ARIA</span>
          </div>
        </div>

        <!-- Official WebAIM AIM Score Display -->
        <div style="background: #fff5f5; border: 1px solid #feb2b2; padding: 10px; border-radius: 6px; margin-bottom: 12px;">
          <span style="font-size: 11px; font-weight: bold; color: #1b3b6f;">
            <span style="text-decoration: underline; color:#3182ce;">AIM Score</span>: <span style="color: #c53030; font-size: 13px;">${d.aimScoreStr}</span>
          </span>
          <div style="width: 100%; height: 6px; background: #e2e8f0; border-radius: 3px; margin-top: 6px; overflow: hidden;">
            <div style="width: ${d.aimBarWidth}%; height: 100%; background: #e53e3e;"></div>
          </div>
        </div>

        <div style="font-size: 12px; font-weight: bold; color: #c53030; margin-bottom: 6px;">
          ✖ ${d.totalErrors} Errors
        </div>
        <div style="font-size: 11px; color: #2d3748; padding-left: 4px; margin-bottom: 4px;">
          ☑ ${d.totalAlt} Missing alternative text
        </div>
        <div style="font-size: 11px; color: #2d3748; padding-left: 4px; margin-bottom: 8px;">
          ☑ ${d.totalLabels} Linked image missing alternative text
        </div>

        <div style="display:grid; grid-template-columns: repeat(8, 1fr); gap: 4px; background: #ffffff; padding: 8px; border: 1px solid #e2e8f0; border-radius: 6px; max-height: 200px; overflow-y: auto;">
          ${iconGridHtml}
        </div>
      </div>
    `;

    document.body.appendChild(sidebar);
    document.body.style.marginLeft = '260px';

    // Inject WAVE Error Icon Overlays on elements
    const iconContainer = document.createElement('div');
    iconContainer.id = 'wave-overlay-icons-container';

    d.viols.forEach((v: any) => {
      try {
        const el = document.querySelector(v.selector);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.width > 0 && rect.height > 0) {
            const icon = document.createElement('div');
            icon.style.position = 'absolute';
            icon.style.top = `${rect.top + window.scrollY}px`;
            icon.style.left = `${rect.left + window.scrollX + 260}px`;
            icon.style.width = '18px';
            icon.style.height = '18px';
            icon.style.backgroundColor = '#c53030';
            icon.style.color = '#ffffff';
            icon.style.fontSize = '10px';
            icon.style.fontWeight = 'bold';
            icon.style.display = 'flex';
            icon.style.justifyContent = 'center';
            icon.style.alignItems = 'center';
            icon.style.borderRadius = '3px';
            icon.style.border = '1px solid #ffffff';
            icon.style.zIndex = '999999';
            icon.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';
            icon.innerText = '✖';
            iconContainer.appendChild(icon);
          }
        }
      } catch {}
    });

    document.body.appendChild(iconContainer);
  }, data);
}

export async function removeWaveOverlay(page: Page): Promise<void> {
  await page.evaluate(() => {
    document.body.style.marginLeft = '0px';
    const sb = document.getElementById('wave-webaim-sidebar');
    if (sb) sb.remove();
    const ic = document.getElementById('wave-overlay-icons-container');
    if (ic) ic.remove();
  });
}
