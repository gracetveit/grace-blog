# Simple Blog Project

This is a simple blog project, limiting myself to Express and Sequelize for the
backend, simple HTML and CSS on the frontend. Parses markdown formatted blog
posts w/ tags

techs used:
- Express
- Sequelize

## todo
- [x] Map Schema
- [ ] init db
- [ ] Write backend routes

## Schema
```
posts
-
id int PK
title string
content text
createdAt datetime
updateAt datetime

tags
-
id int PK
name string

taggings
-
id int PK
postid int FK >- posts.id
tagid int FK >- tags.id
```
