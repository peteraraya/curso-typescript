namespace Validaciones {
  // Funciones
  export function validarFecha(fecha: Date): boolean {
    if ( isNaN( fecha.valueOf())) {
      return true;
    } else {
      return false;
    }
  }
}
