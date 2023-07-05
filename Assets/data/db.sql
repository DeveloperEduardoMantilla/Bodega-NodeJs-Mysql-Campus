CREATE DATABASE bodega_nodejs;

use bodega_nodejs;

create table users(
	id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    email VARCHAR(255) UNIQUE,
    email_verified_at TIMESTAMP,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED, 
    update_by BIGINT(20) UNSIGNED, 
	foto VARCHAR(255),
    password VARCHAR(255),
    created_at TIMESTAMP,
    updated_at TIMESTAMP, 
    deleted_at TIMESTAMP
);

create table productos(
	id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    descripcion VARCHAR(255),
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED, 
    update_by BIGINT(20) UNSIGNED, 
    created_at TIMESTAMP,
    updated_at TIMESTAMP, 
    deleted_at TIMESTAMP, 
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (update_by) REFERENCES users(id)
);

create table bodegas(
	id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(255),
    id_responsable BIGINT(20) UNSIGNED,
    estado TINYINT(4),
    created_by BIGINT(20) UNSIGNED, 
    update_by BIGINT(20) UNSIGNED, 
    created_at TIMESTAMP,
    updated_at TIMESTAMP, 
    deleted_at TIMESTAMP, 
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (update_by) REFERENCES users(id),
    FOREIGN KEY (id_responsable) REFERENCES users(id)
);

create table inventarios(
	id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    id_bodega BIGINT(20) UNSIGNED,
    id_producto BIGINT(20) UNSIGNED,
    cantidad INT(11),
    created_by BIGINT(20) UNSIGNED, 
    update_by BIGINT(20) UNSIGNED, 
    created_at TIMESTAMP,
    updated_at TIMESTAMP, 
    deleted_at TIMESTAMP, 
    FOREIGN KEY (id_bodega) REFERENCES bodegas(id),
    FOREIGN KEY (id_producto) REFERENCES productos(id),
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (update_by) REFERENCES users(id)
);

create table historiales(
	id BIGINT(20) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    cantidad INT(11),
    id_bodega_origen bigint(20) UNSIGNED,
    id_bodega_destino bigint(20) UNSIGNED,
    id_inventario BIGINT(20) UNSIGNED,
    created_by BIGINT(20) UNSIGNED, 
    update_by BIGINT(20) UNSIGNED, 
    created_at TIMESTAMP,
    updated_at TIMESTAMP, 
    deleted_at TIMESTAMP, 
    FOREIGN KEY (id_bodega_origen) REFERENCES bodegas(id),
    FOREIGN KEY (id_bodega_destino) REFERENCES bodegas(id),
    FOREIGN KEY (id_inventario) REFERENCES inventarios(id),
    FOREIGN KEY (created_by) REFERENCES users(id),
    FOREIGN KEY (update_by) REFERENCES users(id)
);
