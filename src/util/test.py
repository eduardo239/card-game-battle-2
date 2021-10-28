# receive a string consisting of words separated by spaces
# and returns a string containing all those words but in reverse order
# and change letter lowercase to uppercase
# and upper case to lower case

def reverse_case(string):
    words = string.split()
    words.reverse()
    for i in range(len(words)):
        words[i] = words[i].swapcase()
    return ' '.join(words)


print(reverse_case('hello world'))

def missingCharacters(s):
    missing = []
    for i in range(len(s)):
        if s[i] == ' ':
            continue
        if s[i] not in s[i+1:]:
            missing.append(s[i])
    return ''.join(missing)

print(missingCharacters('hello world'))

def missingCharacters2(s):
    abc = 'abcdefghijklmnopqrstuvwxyz1234567890'
    missing = []
    res = []
    for i in range(len(s)):
        print(s[i])
        if s[i] not in missing:
            missing.append(s[i])
    for x in range(len(abc)):
        if abc[x] not in missing:
            res.append(abc[x])

    return ''.join(sorted(''.join(res)))



print(missingCharacters2('hello world'))