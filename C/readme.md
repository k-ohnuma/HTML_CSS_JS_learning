1. marginは上下に同じ値があったら相殺される<br>
2. border-boxでpadding, borderを含めた値をwidth, heightに<br>
3. text-alignとかmarginとかで中央ぞろえにしたいときはbackgroundみるとわかりやすい！！！<br>
3. margin: 0 auto はinline-blockには何故か効かん（効いてくれ）<br>
4. line-heightは単位なし<br>
5. 強制的に継承できるinherit;(ex border: inherit;)<br>
6. width/heightはinline-boxでは適用されない<br>
7. positon: fixedはrelativeが聞かない（常にブラウザ基準）<br>
8. z-indexはpositon: static以外に適応可能<br>
9. vertical-alignはinline likeな要素だけ<br>
10.<br>
-----------------------------------<br>
↑<br>
1<br>
1 ←line-height     abc<br>
1<br>
↓<br>
-----------------------------------<br>
11.