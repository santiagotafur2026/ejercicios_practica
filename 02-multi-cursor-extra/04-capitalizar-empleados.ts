//*
//*    Objetivo:
//*        Crear múltiples cursores
//*        Formatear correctamente nombres y departamentos
//*    
//*    Tips:
//*        ⌥ ⌘ ↑ / ↓
//*        Ctrl + Alt+ ↑ / ↓
//*        Transform to Uppercase
//*        Transform to Lowercase
//*        Transform to Title Case
//*
//*    Tarea:
//*        1. Nombres de variables a camelCase
//*        2. Nombres de personas a Title Case
//*        3. Departamentos a Title Case
//*        4. Emails a minúsculas
//*

function empleadosIncorrectos() {
    // Variables en MAyÚsCuLaS
    const EMPLEADO_UNO   = 'JUAN PÉREZ';
    const EMPLEADO_DOS   = 'MARÍA GARCÍA';
    const EMPLEADO_TRES  = 'CARLOS RODRÍGUEZ';
    const EMPLEADO_CUATRO = 'ANA MARTÍNEZ';
    
    // Departamentos
    const DEPARTAMENTO_UNO = 'recursos humanos';
    const DEPARTAMENTO_DOS = 'tecnología';
    const DEPARTAMENTO_TRES = 'ventas';
    const DEPARTAMENTO_CUATRO = 'marketing';
    
    // Emails mal formateados
    const email_uno   = 'JUAN.PEREZ@EMPRESA.COM';
    const email_dos   = 'MARIA.GARCIA@EMPRESA.COM';
    const email_tres  = 'CARLOS.RODRIGUEZ@EMPRESA.COM';
    const email_cuatro = 'ANA.MARTINEZ@EMPRESA.COM';
}


//! Objetivo final - Datos correctamente formateados

function empleadosCorrectos() {
    // Variables en camelCase
    const empleadoUno   = 'Juan Pérez';
    const empleadoDos   = 'María García';
    const empleadoTres  = 'Carlos Rodríguez';
    const empleadoCuatro = 'Ana Martínez';
    
    // Departamentos en Title Case
    const departamentoUno = 'Recursos Humanos';
    const departamentoDos = 'Tecnología';
    const departamentoTres = 'Ventas';
    const departamentoCuatro = 'Marketing';
    
    // Emails en minúsculas
    const emailUno   = 'juan.perez@empresa.com';
    const emailDos   = 'maria.garcia@empresa.com';
    const emailTres  = 'carlos.rodriguez@empresa.com';
    const emailCuatro = 'ana.martinez@empresa.com';
}
