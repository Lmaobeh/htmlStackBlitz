all: sendCSS

sendCSS: css.html cs400_fall20_webpage.html
	scp SortingExample.html css.html cs400_fall20_webpage.html dessertInTheDesertGame.html lnguyen@best-linux.cs.wisc.edu:~/public/html-s/
