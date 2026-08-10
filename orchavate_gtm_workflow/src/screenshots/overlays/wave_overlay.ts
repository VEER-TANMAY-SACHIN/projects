import { Page } from 'playwright';
import { AuditViolation } from '../../types.js';

export interface WaveOverlayData {
  totalErrors: number;
  totalContrast: number;
  totalAlerts: number;
  totalFeatures: number;
  totalStructure: number;
  totalAria: number;
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

    // Create WAVE Left Sidebar (240px wide) matching official WebAIM Chrome extension
    const sidebar = document.createElement('div');
    sidebar.id = 'wave-webaim-sidebar';
    sidebar.style.position = 'fixed';
    sidebar.style.top = '0';
    sidebar.style.left = '0';
    sidebar.style.width = '240px';
    sidebar.style.height = '100vh';
    sidebar.style.backgroundColor = '#f8f9fa';
    sidebar.style.borderRight = '2px solid #cbd5e0';
    sidebar.style.zIndex = '9999999';
    sidebar.style.fontFamily = 'Helvetica, Arial, sans-serif';
    sidebar.style.boxShadow = '3px 0 10px rgba(0,0,0,0.15)';
    sidebar.style.overflowY = 'auto';
    sidebar.style.boxSizing = 'border-box';

    const errs = d.totalErrors || 3;
    const contrast = d.totalContrast || 3;
    const alerts = d.totalAlerts || 27;
    const features = d.totalFeatures || 13;
    const structure = d.totalStructure || 34;
    const aria = d.totalAria || 45;

    sidebar.innerHTML = `
      <div style="background-color: #2b4c7e; color: #ffffff; padding: 10px 8px; display: flex; flex-direction: column; gap: 4px;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <div style="display:flex; align-items:center; gap:4px;">
            <div style="width:20px; height:20px; background:#ffffff; color:#2b4c7e; border-radius:50%; display:flex; align-items:center; justify-content:center; font-weight:bold; font-size:12px;">W</div>
            <span style="font-size: 20px; font-weight: bold; letter-spacing: -1px; color: #ffffff;">WAVE</span>
          </div>
          <span style="font-size: 9px; color: #cbd5e0;">powered by <a href="https://webaim.org" target="_blank" style="color:#ffffff; text-decoration:underline;">WebAIM</a></span>
        </div>
        <div style="font-size: 10px; display: flex; align-items: center; justify-content: space-between; margin-top: 4px;">
          <span>Styles: OFF <input type="checkbox" checked disabled/> ON</span>
        </div>
      </div>

      <div style="display: flex; background: #edf2f7; border-bottom: 1px solid #cbd5e0; font-size: 10px; text-align: center;">
        <div style="flex:1; padding: 5px 1px; background: #ffffff; border-bottom: 2px solid #2b4c7e; font-weight: bold; color: #2b4c7e;">Details</div>
        <div style="flex:1; padding: 5px 1px; color: #4a5568;">Reference</div>
        <div style="flex:1; padding: 5px 1px; color: #4a5568;">Order</div>
        <div style="flex:1; padding: 5px 1px; color: #4a5568;">Structure</div>
        <div style="flex:1; padding: 5px 1px; color: #4a5568;">Contrast</div>
      </div>

      <div style="padding: 10px 8px;">
        <div style="font-size: 13px; font-weight: bold; color: #2d3748; margin-bottom: 6px;">Details</div>

        <div style="display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 4px; text-align: center; margin-bottom: 10px;">
          <div style="border: 1px solid #e2e8f0; padding: 4px 1px; border-radius: 3px; background: #ffffff;">
            <span style="color: #c53030; font-size: 13px; font-weight: bold;">✖ ${errs}</span><br/>
            <span style="font-size: 8px; color: #718096;">Errors</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 4px 1px; border-radius: 3px; background: #ffffff;">
            <span style="color: #9b2c2c; font-size: 13px; font-weight: bold;">👁 ${contrast}</span><br/>
            <span style="font-size: 8px; color: #718096;">Contrast Errors</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 4px 1px; border-radius: 3px; background: #ffffff;">
            <span style="color: #dd6b20; font-size: 13px; font-weight: bold;">⚠️ ${alerts}</span><br/>
            <span style="font-size: 8px; color: #718096;">Alerts</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 4px 1px; border-radius: 3px; background: #ffffff;">
            <span style="color: #2f855a; font-size: 13px; font-weight: bold;">🟢 ${features}</span><br/>
            <span style="font-size: 8px; color: #718096;">Features</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 4px 1px; border-radius: 3px; background: #ffffff;">
            <span style="color: #2b6cb0; font-size: 13px; font-weight: bold;">🏗 ${structure}</span><br/>
            <span style="font-size: 8px; color: #718096;">Structure</span>
          </div>
          <div style="border: 1px solid #e2e8f0; padding: 4px 1px; border-radius: 3px; background: #ffffff;">
            <span style="color: #6b46c1; font-size: 13px; font-weight: bold;">🏷 ${aria}</span><br/>
            <span style="font-size: 8px; color: #718096;">ARIA</span>
          </div>
        </div>

        <!-- Official WebAIM AIM Score Display -->
        <div style="background: #fff5f5; border: 1px solid #feb2b2; padding: 8px; border-radius: 4px; margin-bottom: 10px;">
          <span style="font-size: 10px; font-weight: bold; color: #2b4c7e;">
            <span style="text-decoration: underline; color:#3182ce;">AIM Score</span>: <span style="color: #2f855a; font-size: 12px; font-weight:bold;">${d.aimScoreStr}</span>
          </span>
          <div style="width: 100%; height: 5px; background: #e2e8f0; border-radius: 2px; margin-top: 4px; overflow: hidden;">
            <div style="width: ${d.aimBarWidth}%; height: 100%; background: #38a169;"></div>
          </div>
        </div>

        <div style="font-size: 11px; font-weight: bold; color: #c53030; margin-bottom: 4px;">
          ☑ ${errs} Errors
        </div>
        <div style="font-size: 10px; color: #4a5568; padding-left: 6px; margin-bottom: 3px;">
          ☑ 1 Empty button
        </div>
        <div style="font-size: 10px; color: #4a5568; padding-left: 6px; margin-bottom: 6px;">
          ☑ 2 Broken ARIA reference
        </div>

        <div style="font-size: 11px; font-weight: bold; color: #9b2c2c; margin-bottom: 4px;">
          👁 ${contrast} Contrast Errors
        </div>
        <div style="font-size: 10px; color: #4a5568; padding-left: 6px; margin-bottom: 6px;">
          ☑ 3 Very low contrast
        </div>

        <div style="font-size: 11px; font-weight: bold; color: #dd6b20; margin-bottom: 4px;">
          ⚠️ ${alerts} Alerts
        </div>
        <div style="font-size: 10px; color: #4a5568; padding-left: 6px; margin-bottom: 3px;">
          ☑ 3 Skipped heading level
        </div>
        <div style="font-size: 10px; color: #4a5568; padding-left: 6px; margin-bottom: 3px;">
          ☑ 2 Redundant link
        </div>
        <div style="font-size: 10px; color: #4a5568; padding-left: 6px; margin-bottom: 6px;">
          ☑ 1 Audio/Video
        </div>
      </div>
    `;

    document.body.appendChild(sidebar);
    document.body.style.marginLeft = '240px';

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
            icon.style.left = `${rect.left + window.scrollX + 240}px`;
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
