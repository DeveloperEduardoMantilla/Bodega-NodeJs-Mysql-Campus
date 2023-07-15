# Api bodegas => Actividad CampusLand

## EndPolnt que lista todas las bodegas ordenadas alfabéticamente.

- (GET) http://ipServidor:port/bodegas => Obtiene todos los registros de la tabla bodega ordenados alfabeticamente

- (POST) http://ipServidor:port/bodegas => EndPoint que me permite crear una bodegas.

- (GET) http://ipServidor:port/productos/total => EndPoint que me permite listar todos los productos de manera desendente por un nuevo campo llamado total.

- (POST) http://ipServidor:port/productos => EndPoint que me permite insertar un productos y a su vez asigne una cantidad inicial del mismo en la tabla inventarios en una de las bodegas por default.