function  solucionarRompecabezas(N) {
    var_A = 1
    var_B = 1
    var_C = 1
    var_D = 1
    
    for (let i = 1 ; i <= N; i++){

   let resultado = 3 * var_D + 1 * var_C + 4 * var_B + 1 * var_A
    var_A = var_B
    var_B = var_C
    var_C = var_D
    var_D = resultado
    }

    return var_D % 10000000000 // últimos 10 dígitos de var_D
    }
    function pot(base, exp) {
        let result = BigInt(1);
        let bigBase = BigInt(base);
    
        for (let i = 0; i < exp; i++) {
            result *= bigBase;
        }
    
        return result;
    }

    console.log(solucionarRompecabezas(10)); 
    console.log(solucionarRompecabezas(100)); 
    // console.log(solucionarRompecabezas(Number(pot(2023, 100) % BigInt(Number.MAX_SAFE_INTEGER))));
