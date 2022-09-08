const  navBtn  =  documento . getElementById ( 'nav-btn' ) ;
const  cancelBtn  =  documento . getElementById ( 'cancelar-btn' ) ;
const  sideNav  =  documento . getElementById ( 'sidenav' ) ;
const  modal  =  documento . getElementById ( 'modal' ) ;

navBtn . addEventListener ( "clic" ,  función ( ) {
    navegación lateral . listaclases . añadir ( 'mostrar' ) ;
    modales _ listaclases . agregar ( 'mostrarModal' ) ;
} ) ;

cancelBtn . addEventListener ( 'clic' ,  función ( ) {
    navegación lateral . listaclases . eliminar ( 'mostrar' ) ;
    modales _ listaclases . eliminar ( 'showModal' ) ;
} ) ;

ventana _ addEventListener ( 'clic' ,  función ( evento ) {
    if ( evento . objetivo  ===  modal ) {
        navegación lateral . listaclases . eliminar ( 'mostrar' ) ;
        modales _ listaclases . eliminar ( 'showModal' ) ;
    }
} ) ;