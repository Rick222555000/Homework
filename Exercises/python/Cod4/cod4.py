# 4- Desenvolva uma classe para representar um usuário no sistema, sabendo que esta classe será utilizada para verificação no momento do login e também como estrutura para armazenar os dados do usuário durante a sessão de uso do aplicativo.

class Usuario:
    def __init__(self, Email, password, name, born, sex, cpf):
        self.__Email = Email
        self.__password = password
        self.__name = name
        self.__born = born
        self.__sex = sex
        self.__cpf = cpf

    def ValidarLogin(self, Email, password):
        if (self.__Email == Email and self.__password == password):
            return 'Login Válido'
        else:
            return 'Login Inválido'

    # setters e getters
    
    def set_Email(self, valor):
        self.__Email = valor

    def get_Email(self):
        return self.__Email

    def set_password(self, valor):
        self.__password = valor

    def get_password(self):
        return self.__password

    def set_name(self, valor):
        self.__name = valor

    def get_name(self):
        return self.__name
    
    def set_born(self, valor):
        self.__born = valor

    def get_born(self):
        return self.__born
    
    def set_sex(self, valor):
        self.__sex = valor

    def get_sex(self):
        return self.__sex
    
    def set_cpf(self, valor):
        self.__cpf = valor

    def get_cpf(self):
        return self.__cpf

    #property

    Email = property(get_Email, set_Email)
    password = property(get_password, set_password)
    name = property(get_name, set_name)
    born = property(get_born, set_born)
    sex = property(get_sex, set_sex)
    cpf = property(get_cpf, set_cpf)

user1 = Usuario('rick@gmail.com', '89326147498', 'Rick',
                '22/10/1997', 'Male', '123.456.789-01')

print(user1.ValidarLogin('rick@gmail.com', '89326147498'))
print(user1.ValidarLogin('rick250@gmail.com', '89326147498'))

print(user1.Email)

user1.Email = 'rick250@gmail.com'

print(user1.Email)

print(user1.ValidarLogin('rick@gmail.com', '89326147498'))
print(user1.ValidarLogin('rick250@gmail.com', '89326147498'))

print(user1.name)

user1.name = 'Oi'

print(user1.name)

print(user1.born)

user1.born = '01/01/2004'

print(user1.born)

print(user1.sex)

user1.sex = 'Femia'

print(user1.sex)

print(user1.cpf)

user1.cpf = '098.765.432-10'

print(user1.cpf)

print(user1.password)

user1.password = 'QmDo19e'

print(user1.password)

print(user1.ValidarLogin('rick250@gmail.com', '89326147498'))
print(user1.ValidarLogin('rick250@gmail.com', 'QmDo19e'))