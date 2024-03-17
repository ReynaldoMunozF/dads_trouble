# Express
npm i express

# TypeScript
npm i -D typescript
npm i -D ts-node
npm i -D @types/node
npm i -D @types/express

# Modulos adicionales
npm i cors
npm i -D @types/cors
npm i -D nodemon
npm i -D @faker-js/faker


# TypeORM
npm i typeorm reflect-metadata mysql2

# Crear tsconfig.json
npx tsc --init

    # {
    #     "compilerOptions": {
    #         "target": "ES2021",
    #         "experimentalDecorators": true, 
    #         "emitDecoratorMetadata": true,
    #         "rootDir": "./src",
    #         "outDir": "./dist",
    #     },
    #     "include": [
    #         "src/**/*.ts"
    #     ],
    #     "exclude": [
    #         "node_modules"
    #     ]
    # }
    
# Configurar package.json

    # {
    #     "main": "dist/server.js",
    #     "scripts": {
    #         "build": "npx tsc",
    #         "start": "node dist/server.js",
    #         "dev": "nodemon --files src/server.ts"
    #     },
    # }




# Crear migraciones en TypeORM manualmente
npx typeorm migration:create ./src/migrations/CreateUser

# Ejecutar migraciones en TypeORM 
npx typeorm-ts-node-commonjs migration:run -d ./src/data-source.ts 

# Revierte la última migración en TypeORM. Para revertir las demás, repetir el comando en orden inverso.
npx typeorm-ts-node-commonjs migration:revert -d ./src/data-source.ts


# Crear modelos
npx typeorm entity:create ./src/models/User

# ------------------------------------------------------------------------------
# Despues de refactorizar la estructura de directorio de la base de datos
# ------------------------------------------------------------------------------

# Crear migraciones manualmente
npx typeorm migration:create ./src/database/migrations/CreateUsers
npx typeorm migration:create ./src/database/migrations/Createfamilies
npx typeorm migration:create ./src/database/migrations/CreateTasks
npx typeorm migration:create ./src/database/migrations/CreateRoles
npx typeorm migration:create ./src/database/migrations/CreateUserDetail



# Ejecutar migraciones
npx typeorm-ts-node-commonjs migration:run -d ./src/database/data-source.ts 

# Crear modelos
npx typeorm entity:create ./src/models/UserDetails
npx typeorm entity:create ./src/models/User
npx typeorm entity:create ./src/models/Student
npx typeorm entity:create ./src/models/Teacher
npx typeorm entity:create ./src/models/Course
npx typeorm entity:create ./src/models/Enrollment

CREATE USERS

INSERT INTO users (first_name, last_name, email, phone, birthday, password) VALUES
('John', 'Doe', 'john.doe@example.com', '123-456-7890', '1990-05-15', 'password1'),
('Jane', 'Smith', 'jane.smith@example.com', '234-567-8901', '1985-08-20', 'password2'),
('Michael', 'Johnson', 'michael.johnson@example.com', '345-678-9012', '1982-03-10', 'password3'),
('Emily', 'Brown', 'emily.brown@example.com', '456-789-0123', '1995-11-25', 'password4'),
('Christopher', 'Lee', 'christopher.lee@example.com', '567-890-1234', '1978-07-05', 'password5'),
('Amanda', 'Wilson', 'amanda.wilson@example.com', '678-901-2345', '1989-09-30', 'password6'),
('Daniel', 'Taylor', 'daniel.taylor@example.com', '789-012-3456', '1984-01-12', 'password7'),
('Jessica', 'Martinez', 'jessica.martinez@example.com', '890-123-4567', '1992-06-18', 'password8'),
('Matthew', 'Anderson', 'matthew.anderson@example.com', '901-234-5678', '1987-04-22', 'password9'),
('Sarah', 'Thomas', 'sarah.thomas@example.com', '012-345-6789', '1980-12-07', 'password10'),
('David', 'Garcia', 'david.garcia@example.com', '123-456-7890', '1983-08-14', 'password11'),
('Jennifer', 'Jones', 'jennifer.jones@example.com', '234-567-8901', '1998-02-28', 'password12'),
('James', 'Rodriguez', 'james.rodriguez@example.com', '345-678-9012', '1986-10-03', 'password13'),
('Lauren', 'Hernandez', 'lauren.hernandez@example.com', '456-789-0123', '1993-07-17', 'password14'),
('Ryan', 'Young', 'ryan.young@example.com', '567-890-1234', '1979-05-09', 'password15'),
('Michelle', 'Lopez', 'michelle.lopez@example.com', '678-901-2345', '1990-11-13', 'password16'),
('Andrew', 'Scott', 'andrew.scott@example.com', '789-012-3456', '1981-03-28', 'password17'),
('Stephanie', 'King', 'stephanie.king@example.com', '890-123-4567', '1996-09-05', 'password18'),
('Kevin', 'Wright', 'kevin.wright@example.com', '901-234-5678', '1988-02-19', 'password19'),
('Rachel', 'Nguyen', 'rachel.nguyen@example.com', '012-345-6789', '1984-06-23', 'password20');


CREATE TATTOO_ARTISTS

INSERT INTO tattoo_artists (nickname, password, first_name, last_name, email, role) VALUES
('coolguy123', '123456', 'Michael', 'Johnson', 'admin@admin.com', 'super_admin'),
('soccerlover', 'soccer123', 'Emily', 'Robinson', 'emily.robinson@example.com', 'admin'),
('bookworm', 'bookpass', 'Daniel', 'Garcia', 'daniel.garcia@example.com', 'admin'),
('musicfanatic', 'music123', 'Jessica', 'Martinez', 'jessica.martinez@example.com', 'admin'),
('gamer4life', 'gamerpass', 'Andrew', 'Hernandez', 'andrew.hernandez@example.com', 'admin'),
('artlover', 'artpass', 'Sophia', 'Lopez', 'sophia.lopez@example.com', 'admin');
('techgeek', 'techpass', 'David', 'Perez', 'david.perez@example.com', 'admin'),
('traveler', 'travelpass', 'Olivia', 'Gonzalez', 'olivia.gonzalez@example.com', 'admin'),
('foodie', 'foodpass', 'Ethan', 'Sanchez', 'ethan.sanchez@example.com', 'admin'),
('fitnessjunkie', 'fitnesspass', 'Ava', 'Ramirez', 'ava.ramirez@example.com', 'admin');


Luna Mariposa (298 caracteres): Luna es una artista del tatuaje cuyos diseños fusionan la naturaleza con la geometría sagrada. Cada obra es un fascinante reflejo del alma, capturando la esencia misma de la vida en formas y patrones intrincados que invitan a la contemplación y la conexión espiritual.

Raven Ink (274 caracteres): Raven, el tatuador gótico, es maestro en crear diseños oscuros y misteriosos que cuentan historias profundas a través de la tinta. Sus obras, llenas de simbolismo y detalle, se convierten en ventanas hacia mundos secretos donde la imaginación se desata.

Zen Master (259 caracteres): Zen, un tatuador minimalista, transmite paz y armonía a través de líneas limpias y simetría perfecta. Sus diseños, elegantes en su simplicidad, invitan a la contemplación y reflejan la belleza en la pureza de las formas.

Wild Canvas (290 caracteres): Conocido como "Wild", este tatuador celebra la vida y la naturaleza con diseños coloridos y vibrantes que capturan la atención. Cada tatuaje es una explosión de energía y alegría, una expresión audaz de la belleza del mundo que nos rodea.

Ink Scribe (237 caracteres): Scribe, el tatuador literario, convierte palabras en arte con una caligrafía excepcional. Sus tatuajes, adornados con pasajes de libros y citas inspiradoras, son testimonios vivientes de la belleza de la palabra escrita.

Electric Pulse (281 caracteres): Pulse, el tatuador futurista, fusiona tecnología y arte en diseños electrificantes que brillan con colores vibrantes y líneas dinámicas. Sus tatuajes son como fragmentos de un mundo distópico, donde la creatividad y la innovación se unen en perfecta armonía.