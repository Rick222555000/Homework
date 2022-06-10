#1- Crie um programa que ler 3 números inteiros A, B, C e exibe a mensagem se o resultado R=(A+B)/C é maior que B ou não.

A, B, C = int(input()), int(input()), int(input())
R = (A + B)/C

def Maior(R, B):
  if (R > B):
    return 'R é maior que B.'
  else:
    return 'R não é maior que B.'

print(Maior(R, B))