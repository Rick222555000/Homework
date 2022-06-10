#2- Faça um programa que ler dois valores inteiros A e B e imprime todos os números pares entre eles.

A, B = int(input()), int(input())

def Par(A, B):
  lis = []
  
  if (A < B):
    A, B = A, B
  elif (A > B):
    A, B = B, A
    
  for i in range(A+1, B):
      if (i%2 == 0):
        lis.append(i)
  return lis

print(Par(A, B))