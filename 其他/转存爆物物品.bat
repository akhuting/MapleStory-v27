@echo off
@title ת�汬����Ʒ
COLOR 8F

set CLASSPATH=.;..\dist\*;..\libs\*
java -Xmx512m -Dwzpath=..\ -Dpath=..\ tools.wztosql.MonsterDropCreator

pause