# DevX

## Agenda

* DevSign
  * HTML
  * CSS
  * Portfolio
* DevOps
  * AWS
  * Docker
  * Deploy
* git basics
  * clone
  * branch
  * commit
  * log
  * diff
  * stash
  * rebase
  * filter-branch

## Filter branch

```sh
git filter-branch --force --index-filter \
  'git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA' \
  --prune-empty --tag-name-filter cat -- --all
```
