function start1()
{
    let a = parseInt(prompt('Qual o valor de A?'));

    let b = parseInt(prompt('Qual o valor de B?'));

    let c = parseInt(prompt('Qual o valor de C?'));

    let sum = a + b;

    if (sum < c)
    {
        prompt('C é maior que A + B');
    }

    else
    {
        if (sum == c)
        {
            prompt('C é igual a A + B');
        }
        else
        {
            prompt('C é menor que A + B');
        }
    };
};

function start2()
{
    let n = parseInt(prompt('Insira um número.'));

    if (n < 0)
    {
        prompt('Negativo');
    }
    else
    {
        if (n == 0)
        {
            prompt('Zero');
        }
        else
        {
            prompt('Positivo');
        }
    };

    if (n % 2 == 0)
    {
        prompt('Par');
    }
    else
    {
        prompt('Ímpar');
    };
};

function start3()
{
    let a = parseInt(prompt('Qual o valor de A?'));

    let b = parseInt(prompt('Qual o valor de B?'));

    if (a == b)
    {
        prompt(a + b);
    };
};

function start4()
{
    let n = parseInt(prompt('Insira um número.'));

    prompt(n - 1);

    prompt(n + 1);
};

function start5()
{
    let sm = 1293.00;

    let s = parseFloat(prompt('Insira seu salário.'));

    prompt(s / sm);
};

function start6()
{
    let n = parseInt(prompt('Insira um número.'));

    prompt(n + (n * 0.05));
};

function start7()
{
    let t = parseInt(prompt('Insira 1 para dia e 2 para noite.'))

    if (t == 1)
    {
        let dia = true;

        prompt(`Dia`, dia);
    }
    else
    {
        let dia = false;

        prompt(`Noite`, dia);
    };
};

function start8()
{
    let a = parseInt(prompt('Insira um número.'));
    
    let b = parseInt(prompt('Insira um número.'));

    let c = parseInt(prompt('Insira um número.'));
    
    if (a > b && b > c)
    {
        let d = [a, b, c];

        prompt(d, ' ');
    }
    else if (a > c && c > b)
    {
        let d = [a, c, b];

        prompt(d);
    }
    else
    {
        if (b > a && a > c)
        {
            let d = [b, a, c];

            prompt(d);
        }
        else if (b > c && c > a)
        {
            let d = [b, c, b];

            prompt(d);
        }
        else
        {
            if (c > a && a > b)
            {
                let d = [c, a, b];
    
                prompt(d);
            }
            else if (c > b && b > a)
            {
                let d = [c, b, a];
    
                prompt(d);
            }
            else
            {
                if (a == b && a > c)
                {
                    let d = [a, b, c];
    
                    prompt(d);
                }
                else if (a == b && c > a)
                {
                    let d = [c, a, b];
    
                    prompt(d);
                }
                else
                {
                    if (a == c && a > b)
                    {
                        let d = [a, c, b];
        
                        prompt(d);
                    }
                    else if (a == c && b > a)
                    {
                        let d = [b, a, c];
        
                        prompt(d);
                    }
                    else
                    {
                        if (b == c && b > a)
                        {
                            let d = [b, c, a];
            
                            prompt(d);
                        }
                        else if (b == c && a > b)
                        {
                            let d = [a, b, c];
            
                            prompt(d);
                        }
                        else
                        {
                            let d = [a, b, c];
            
                            prompt(d);
                        };
                    };
                };
            };
        };
    };
};

function start9()
{
    let a = parseFloat(prompt('Insira sua altura.'));

    let p = parseFloat(prompt('Insira seu peso.'));

    const imc = p / a ** 2;

    if (imc < 18.5)
    {
        prompt('Abaixo do peso.ç');
    }
    else if (imc > 18.5 && imc < 24.9)
    {
        prompt('Peso ideal.');
    }
    else
    {
        if (imc > 24.9 && imc < 29.9)
        {
            prompt('Acima do peso.');
        }
        else if (imc > 29.9 && imc < 34.9)
        {
            prompt('Obesidade grau I');
        }
        else
        {
            if (imc > 34.9 && imc < 39.9)
            {
                prompt('Obesidade grau II (severa)');
            }
            else if (imc > 39.9 && imc >= 40)
            {
                prompt('Obesidade grau III (mórbida)');
            };
        };
    };
};

function start10()
{
    let n1 = parseFloat(prompt('Insira a nota 1.'));

    let n2 = parseFloat(prompt('Insira a nota 2.'));

    let n3 = parseFloat(prompt('Insira a nota 3.'));

    const m = (n1 + n2 + n3) / 3;

    prompt(`A média de nota do aluno é `, m);
};

function start11()
{
    let n1 = parseFloat(prompt('Insira a nota 1.'));

    let n2 = parseFloat(prompt('Insira a nota 2.'));

    let n3 = parseFloat(prompt('Insira a nota 3.'));

    let n4 = parseFloat(prompt('Insira a nota 4.'));

    const m = (n1 + n2 + n3 + n4) / 4;

    prompt(`A média de nota do aluno é `, m);

    if (m >= 7)
    {
        prompt('Portanto, foi aprovado.');
    }
    else
    {
        prompt('Portanto, foi reprovado.');
    };
};

function start12()
{
    let v = parseFloat(prompt('Insira o valor do produto.'));

    let p = parseInt(prompt('1 - À Vista em Dinheiro ou Pix, recebe 15% de desconto. \n2 - À Vista no cartão de crédito, recebe 10% de desconto. \n3 - Parcelado no cartão em duas vezes, preço normal do produto sem juros. \n4 - Parcelado no cartão em três vezes ou mais, preço normal do produto mais juros de 10.'));

    if (p == 1)
    {
        let f = v - (v * 0.15);

        prompt(`O valor final é`, f);
    }
    else if (p == 2)
    {
        let f = v - (v * 0.1);

        prompt(`O valor final é`, f);
    }
    else
    {
        if (p == 3)
        {
            let f = v;

            prompt(`O valor final é`, f);
        }
        else if (p == 4)
        {
            let f = v + (v * 0.1);

            prompt(`O valor final é`, f);
        }
        else
        {
            prompt('Vai pagar como?');
        };
    };
};

function start13()
{
    let n = prompt('Insira seu nome.');

    let i = parseInt(prompt('Insira sua idade.'));

    if (i < 18)
    {
        prompt(`Menor de idade, `, n);
    }
    else
    {
        prompt(`maior de idade, `, n);
    };
};

function start14()
{
    let a = prompt('Insira o valor de A.');

    let b = prompt('Insira o valor de B.');

    prompt(`A:`, b);

    prompt(`B:`, a);
};

function start15()
{
    prompt('Atenção: Esta calculadora apenas calcula sua idade até o dia 24 de nov. de 2024.')
    
    let d = 24 - parseInt(prompt('Que dia você nasceu?'));

    let m = 11 - parseInt(prompt('Que mês você nasceu?'));

    let a = 2024 - parseInt(prompt('Que ano você nasceu?'));

    if (m == 2 && d > 29 || m % 2 == 0 && d > 30 || m % 2 != 0 && d > 31 || a > 2024 || m > 12 || a > 31)
    {
        prompt('Data inválida.');
    }
    else if (a - 2 % 4 != 0 && m == 2 && d > 28)
    {
        prompt('Data inválida.');
    }
    else
    {
        if (m + 11 > 11)
        {
            if (d + 24 > 24)
            {
                prompt(a, `Anos.`);

                prompt(m, `Meses.`);

                prompt(d, `Dias.`);
            }
            else if (m + 11 > 11 && d + 24 < 24)
            {
                prompt(a, `Anos.`);

                prompt(m, `Meses.`);

                prompt(d, `Dias.`);
            }
        }
        else if (d + 24 < 24)
        {
            prompt(a - 1, `Anos.`);

            prompt(m + 11, `Meses.`);

            prompt(d + 24, `Dias.`);
        }
        else
        {
            prompt(a - 1, `Anos.`);

            prompt(m + 11, `Meses.`);

            prompt(d, `Dias.`);
        };
    };
};

function start16()
{
    let l1 = parseInt(prompt('Insira um lado de um triângulo.'));

    let l2 = parseInt(prompt('Insira outro lado do triângulo.'));

    let l3 = parseInt(prompt('Insira outro lado do triângulo.'));

    if (l1 <= 0 || l2 <= 0 || l3 <= 0)
    {
        prompt('Isso não é um triângulo, cabeção.');
    }
    else if (l1 == l2 && l2 == l3)
    {
        prompt('Triângulo equilátero.');
    }
    else
    {
        if (l1 != l2 && l2 != l3 && l3 != l1)
        {
            prompt('Triângulo escaleno.');
        }
        else
        {
            prompt('Triângulo isósceles.');
        };
    };
};

function start17()
{
    let f = parseInt(prompt('Insira uma temperatura em Fahrenheit.'));

    let c = 5 * (f - 32) / 9;

    let t = [f, c];

    prompt(`As temperaturas em graus Fahrenheit e Celsius são, respectivamente:`, t);
};

function start18()
{
    let f = 1.5;

    let s = 1.1;

    let c = 0;

    while (s <= f)
    {
        f += 0.02;

        s += 0.03;

        c++;
    };

    prompt(`Serão necessários`, c);
};

function start19()
{
    let c = 1;

    while (c < 11)
    {
        let t1 = 1 * c;

        c++;

        prompt(t1);
    };

    c = 1;
    
    while (c < 11)
    {
        let t2 = 2 * c;

        c++;

        prompt(t2);
    };

    c = 1;
    
    while (c < 11)
    {
        let t3 = 3 * c;

        c++;

        prompt(t3);
    };

    c = 1;
    
    while (c < 11)
    {
        let t4 = 4 * c;

        c++;

        prompt(t4);
    };

    c = 1;
    
    while (c < 11)
    {
        let t5 = 5 * c;

        c++;

        prompt(t5);
    };

    c = 1;
    
    while (c < 11)
    {
        let t6 = 6 * c;

        c++;

        prompt(t6);
    };

    c = 1;
    
    while (c < 11)
    {
        let t7 = 7 * c;

        c++;

        prompt(t7);
    };

    c = 1;
    
    while (c < 11)
    {
        let t8 = 8 * c;

        c++;

        prompt(t8);
    };

    c = 1;
    
    while (c < 11)
    {
        let t9 = 9 * c;

        c++;

        prompt(t9);
    };

    c = 1;
    
    while (c < 11)
    {
        let t10 = 10 * c;

        c++;

        prompt(t10);
    };
};

function start20()
{
    let n = parseInt(prompt('Insira um número inteiro.'));

    let c = 1;

    while (c < 11)
    {
        let t = n * c;

        c++;

        prompt(t);
    };
};

function start21()
{
    let n = Math.floor(Math.random() * 101);

    prompt(n);
};

function start22()
{
    let a = parseFloat(prompt('Insira um valor A.'));

    let b = parseFloat(prompt('Insira um valor B.'));

    let d1 = a / b;

    let d2 = Math.floor(a / b);

    prompt(d2, d1 - d2);
};

function start23()
{
    let h = parseInt(prompt('Insira as horas por aula de um professor.'));

    let v = parseInt(prompt('Insira o valor das horas por aula.'));

    let a = parseInt(prompt('Insira a quantidade de aulas por mês.'));

    let d = parseInt(prompt('Insira o desconto do INSS, em porcentagem.'));

    let s = h * v * a - (h * v * a * (d /100));

    prompt(s);
};

function start24()
{
    let t = parseInt(prompt('Insira o tempo da viagem, em horas.'));

    let d = parseInt(prompt('Insira a distância percorrida na viagem, em km.'));

    let v = d / t;

    let l = d / 12;

    prompt(`Velocidade média:`, v);

    prompt(`Foram gastos, em litros:`, l);
};
