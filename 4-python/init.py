# https://realpython.com/pipenv-guide/ (pipenv)
# https://www.datacamp.com/tutorial/pip-python-package-manager (pip install)


# Objects in python are dictionaries


# Classes
# Clsses are a type of object that allow us to bundle data and functionality together

def lambda_func(a, b): return a + b


def plus_one(x): return x + 1


list_element = [1, 2, 3, 4, 5]

list_plus_one = list(map(plus_one, list_element))
print(list_plus_one)

print(list(map(lambda x: x + 1, list_element)))

colors = ['red', 'green', 'blue']
