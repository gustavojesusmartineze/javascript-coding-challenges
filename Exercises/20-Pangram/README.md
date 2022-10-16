

# Pangram
## Introduction
In the Spanish class of the town of Lapland they have created a challenge when writing the letter to Santa Claus 🎅: the letter ✉️ has to contain all the letters of the alphabet.

From Santa's workshop 🎅 they have found out and want to write **a function** that tells them if the text string they receive actually has all the letters of the Spanish alphabet 🔎.

It is necessary to take into account the letters in capital letters and that the letters with accent and umlauts are considered the same. For example, `á` and `ä` count as one `a`.


### Examples

Let's see some examples of sentences:

```
pangram('Extraño pan de col y kiwi se quemó bajo fugaz vaho') // true
pangram('Jovencillo emponzoñado y con walkman: ¡qué figurota exhibes!') // true

pangram('Esto es una frase larga pero no tiene todas las letras del abecedario') // false
pangram('De la a a la z, nos faltan letras') // false
```
