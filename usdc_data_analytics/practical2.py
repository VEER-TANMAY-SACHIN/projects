#pemdas is the precedence of operations in python. It stands for Parentheses, Exponents, Multiplication and Division, Addition and Subtraction. It is used to determine the order in which operations are performed in a mathematical expression.
(3+2)*2**2/2-3

# #conditional statements are used to perform different actions based on different conditions. The most common conditional statements are if, elif, and else.
# basic if statement

#python program uses a hybrid exe model that combines both compilation and interpretation.\ The source code is first compiled into bytecode, which is a low-level, platform-independent representation of the code. The bytecode is then interpreted by the Python interpreter, which executes the code line by line.
#python is high level language slower thn c/c++ 
#python is dynamically typed, which means that the type of a variable is determined at runtime, rather than at compile time. This allows for greater flexibility in programming, as variables can be assigned different types of values throughout the program. However, it can also lead to errors if the programmer is not careful with variable assignments and type conversions.

x = 0.1

if x> 5:
    print("x is greater than 5")
# if-else statement
if x > 5:
    print("x is greater than 5")
else:
    print("x is lower than 5")

# if-else statement
#     the else block executes when the if condition is false.
x = 18
if x >= 18:
    print("you are eligible to vote")
else:
    print("you are not eligible to vote")

# if-elif-else statement

# #     when multiple conditions need to be checked sequentially , use eilf(short for"else if")
# x=5
# if x> 10:
#     print("x is greater than 10")
#     elfi


# age = int(input("Enter your age: "))
# print("input your age", age)
# if age < 18:
#     category = "Minor"
# elif age < 65:
#     category = "Adult"
# else:
#     category = "senior citizen"
# print("C"ategory:", category)


# marks = int(input("Enter your marks:"))

# if marks > 100 or marks < 0:
#     print("invalid marks")
# elif marks >= 90:
#     print("A+")
# elif marks >= 75:
#     print("B")
# elif marks >=60:
#     print("C")
# elif marks >= 35:
#     print("pass and D")
# else:  # marks < 35
#     print("fail")

signal = input("enter the color:")

if signal == "red":
    print("stop")
elif signal == "yellow":
    print("wait")
elif signal == "green":
    print("go")
else:
    print("invalid signal color")


               