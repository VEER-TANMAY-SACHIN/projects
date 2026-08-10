import streamlit as st

st.set_page_config(page_title="Calculator", layout="centered")

st.title("🧮 Calculator")

col1, col2, col3 = st.columns(3)
with col1:
    num1 = st.number_input("First number", value=0.0, step=1.0, format="%.2f")
with col2:
    operation = st.selectbox("Operation", ["+", "-", "*", "/", "**", "%"])
with col3:
    num2 = st.number_input("Second number", value=0.0, step=1.0, format="%.2f")

if st.button("Calculate", use_container_width=True):
    try:
        if operation == "+":
            result = num1 + num2
        elif operation == "-":
            result = num1 - num2
        elif operation == "*":
            result = num1 * num2
        elif operation == "/":
            if num2 == 0:
                st.error("❌ Cannot divide by zero!")
            else:
                result = num1 / num2
                st.success(f"**Result:** {num1} {operation} {num2} = **{result:.2f}**")
        elif operation == "**":
            result = num1 ** num2
        elif operation == "%":
            if num2 == 0:
                st.error("❌ Modulo by zero is undefined!")
            else:
                result = num1 % num2
        
        if operation != "/" or num2 != 0:
            if operation != "%":
                st.success(f"**Result:** {num1} {operation} {num2} = **{result:.2f}**")
            else:
                st.success(f"**Result:** {num1} {operation} {num2} = **{result}**")
    except Exception as e:
        st.error(f"❌ Error: {str(e)}")