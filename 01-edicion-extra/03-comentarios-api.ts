//*
//*    Objetivo:
//*        Comentar y descomentar bloques de código
//*    
//*    Tips:
//*        Toggle line comment: Ctrl + /
//*        Toggle block comment: Shift + Alt + A
//*
//*    Tarea:
//*        1. Comentar las líneas de configuración de desarrollo (7-11)
//*        2. Descomentar las líneas de configuración de producción (14-18)
//*        3. Comentar todo el bloque de logging (21-30)
//*

// Configuración de API
const API_CONFIG = {
    // Desarrollo
    baseURL: 'http://localhost:3000',
    timeout: 5000,
    debug: true,
    logLevel: 'verbose',
    retries: 3,

    // Producción
    // baseURL: 'https://api.miapp.com',
    // timeout: 10000,
    // debug: false,
    // logLevel: 'error',
    // retries: 5,

    // Sistema de logging
    logging: {
        enabled: true,
        logToConsole: true,
        logToFile: false,
        maxFileSize: '10MB',
        logDirectory: './logs',
        logFormat: 'json',
        includeTimestamp: true,
        includeStackTrace: true
    }
};


//! Objetivo final - Configuración lista para producción

const API_CONFIG_FINAL = {
    // Desarrollo
    // baseURL: 'http://localhost:3000',
    // timeout: 5000,
    // debug: true,
    // logLevel: 'verbose',
    // retries: 3,

    // Producción
    baseURL: 'https://api.miapp.com',
    timeout: 10000,
    debug: false,
    logLevel: 'error',
    retries: 5,

    // Sistema de logging
    /*
    logging: {
        enabled: true,
        logToConsole: true,
        logToFile: false,
        maxFileSize: '10MB',
        logDirectory: './logs',
        logFormat: 'json',
        includeTimestamp: true,
        includeStackTrace: true
    }
    */
};
