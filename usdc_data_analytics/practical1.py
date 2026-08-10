# #print("hello world")
# #print("My name is Tanmay")
# '''city = input("enter your city:")
# print("My city is:", city)
# a = float(input("Enter first number: "))
# b = float(input("Enter second number:"))
# print("The sum is:", int(a) + int(b))'''

# name = str(input("Enter your name:"))
# age = int(input("Enter your age:"))
# city = str(input("Enter your city:"))

# favourite_food = str(input("Enter your favourite food:"))
# print("wow ! i also like", favourite_food)

# print("to calculate are of rectangle please input (length x width)")
# length = int(input("Enter length:"))
# width = int(input("Enter width:"))
# print("area of rectangle is:", int(length) * int(width))

#print("10","02","2003", sep="/")
# x,y = input("Enter two numbers seprated by space: ").split()
# print("x =", x, "y =", y)


# age = 23
# name = "Tanmay"
# print("I am", age, "years old")
# print(f"I am {name}, {age} years old")

# string_name = "tanmay"
# string_position = "diplomat"
# Mission = "embassy"
# Country = "India"
# print(f"Hello, I'm {string_name}, {string_position} at the {Mission} of {Country}")
    
print("assignment 1.welcome to python")
print("question 1:what is python and its features \n answer: python is a high level programming language and its features are:\n1. easy to learn\n2. open source\n3. interpreted language\n4. dynamically typed\n5. object oriented\n6. portable\n7. extensible\n8. large standard library")
print("question 2:what is the importance of python in data science \n answer: python is important in data science because it has a large number of libraries and frameworks that are specifically designed for data analysis, machine learning, and data visualization. It also has a simple syntax that makes it easy to learn and use for data scientists.")
# operators, string

print("operators in python are:\n1. arithmetic operators\n2. comparison operators\n3. logical operators\n4. assignment operators\n5. bitwise operators\n6. membership operators\n7. identity operators")

print("2] arithmetic operators are:\n1. addition(+)\n2. subtraction(-)\n3. multiplication(*)\n4. division(/)\n5. modulus(%)\n6. exponentiation(**)\n7. floor division(//)")

a= 10
b = 20
print("addition = ", a+b)
print("subtraction = ", a-b)
print("multiplication = ", a*b)
print("division = ", a/b)
print("modulus = ", a%b)
print("exponentiation = ", a**b)
print("floor division = ", a//b)

print("3] comparison operators are:\n1. equal to(==)\n2. not equal to(!=)\n3. greater than(>)\n4. less than(<)\n5. greater than or equal to(>=)\n6. less than or equal to(<=)")    

a = 10
b = 20
print("equal to = ", a==b)
print("not equal to = ", a!=b)
print("greater than = ", a>b)
print("less than = ", a<b)
print("greater than or equal to = ", a>=b)
print("less than or equal to = ", a<=b)

print("4] logical operators are:\n1. and\n2. or\n3. not")

a = True
b = False

print("and = ", a and b)
print("or = ", a or b)
print("not = ", not a)

print("5] assignment operators are:\n1. =\n2. +=\n3. -=\n4. *=\n5. /=\n6. %= \n7. **=\n8. //=")    

a = 10
b = 20
a += b
print("a += b = ", a)
a -= b
print("a -= b = ", a)
a *= b
print("a *= b = ", a)
a /= b
print("a /= b = ", a)
a %= b
print("a %= b = ", a)
a **= b
print("a **= b = ", a)
a //= b
print("a //= b = ", a)

print("6] bitwise operators are:\n1. &\n2. |\n3. ^\n4. ~\n5. <<\n6. >>")

a = 10
b = 20
print("a & b = ", a & b)
print("a | b = ", a | b)
print("a ^ b = ", a ^ b)
print("~a = ", ~a)
print("a << 2 = ", a << 2)
print("a >> 2 = ", a >> 2)

print("membership operators are:\n1. in\n2. not in")

a = [1, 2, 3, 4, 5]
print("1 in a = ", 1 in a)
print("6 not in a = ", 6 not in a)
print("identity operators are:\n1. is\n2. is not")

a = 10
b = 10
print("a is b = ", a is b)
print("a is not b = ", a is not b)

print("7] string operators are:\n1. +\n2. *\n3. []\n4. [:]\n5. in\n6. not in\n7. is\n8. is not")   

a = "Hello"
b = "World"
print("a + b = ", a + b)
print("a * 2 = ", a * 2)
print("a[0] = ", a[0])
print("a[1:4] = ", a[1:4])
print("'H' in a = ", 'H' in a)
print("'h' not in a = ", 'h' not in a)


print("strings")

print("1] string is a sequence of characters enclosed in single or double quotes")

print("Build-in Methods of string are:\n1. capitalize()\n2. casefold()\n3. center()\n4. count()\n5. encode()\n6. endswith()\n7. expandtabs()\n8. find()\n9. format()\n10. index()\n11. isalnum()\n12. isalpha()\n13. isdecimal()\n14. isdigit()\n15. isidentifier()\n16. islower()\n17. isnumeric()\n18. isprintable()\n19. isspace()\n20. istitle()\n21. isupper()\n22. join()\n23. ljust()\n24. lower()\n25. lstrip()\n26. partition()\n27. replace()\n28. rfind()\n29. rindex()\n30. rjust()")

a= "hello world"
print("capitalize = ", a.capitalize())
print("casefold = ", a.casefold())
print("center = ", a.center(20, '*'))
print("count = ", a.count('o'))

print("string indexing and slicing")

a = "precedence"

print("original string =", a)

# indexing use-cases
print("a[0] =", a[0])
print("a[1] =", a[1])
print("a[-1] =", a[-1])
print("a[-2] =", a[-2])

# slicing use-cases
print("a[1:4] =", a[1:4])
print("a[:4] =", a[:4])
print("a[4:] =", a[4:])
print("a[:] =", a[:])
print("a[::2] =", a[::2])
print("a[1::2] =", a[1::2])
print("a[1:8:2] =", a[1:8:2])
print("a[-6:-1] =", a[-6:-1])
print("a[-1:-6:-1] =", a[-1:-6:-1])
print("a[::-1] =", a[::-1])
print("a[5:1:-1] =", a[5:1:-1])
print("a[1:4:-2] =", a[1:4:-2])

# #self learn https://media.datacamp.com/cms/python-basics-cheat-sheet-v4.pdf
# 1+1 #everything after the hash symbol is ignored bt python
# help(max) #display the doc for max function
# type(a) #get type of an object - this return str

# import pandas #import package wo an alias
# import pandas as pd #

#packages
s="packages"
print("s[0:9] =", s[0:9])

#package
print("s[0:8] =", s[0:8])
#pack
print("s[0:3] =", s[0:3])

print("s[0:3] + s[3:8] =", s[0:3] + s[3:8])

