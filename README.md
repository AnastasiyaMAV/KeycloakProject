# Приложение "KeycloakProject"

---

## Приложение было создано для изучении сервиса [Keycloak](https://www.keycloak.org/)

Страница приложения KeycloakProject:

![gif](https://github.com/AnastasiyaMAV/KeycloakProject/blob/main/src/assets/KeycloakProject.gif)

#### Требования для запуска приложения:

На компьютере должен быть установлен [docker](https://www.docker.com/)

#### Запуск приложения:

```
Клонируем проект:
git clone https://github.com/AnastasiyaMAV/KeycloakProject.git

Запускаем установленный докер на копьютере.

Запускаем Keycloak:
docker run -d -p 4000:8080 -e KEYCLOAK_ADMIN=admin -e KEYCLOAK_ADMIN_PASSWORD=admin quay.io/keycloak/keycloak:21.1.1 start-dev

```
![png](https://github.com/AnastasiyaMAV/KeycloakProject/blob/main/src/assets/Docker.png)
```

Открываем http://localhost:4000/

```
![png](https://github.com/AnastasiyaMAV/KeycloakProject/blob/main/src/assets/Keycloak-admin.png)
```
Переходим в проект:
cd KeycloakProject

Устанавливаем зависмости:
npm install

Запускаем проект:
npm run dev

Открываем http://localhost:5173/
```
