# note-using-editorconfig

## content

### the commom propety of .editorconfig

```md
# 顶级配置

root = true

[*]

# 缩进方式

indent_style = space

# 缩进大小

indent_size = 2

# 编码格式

charset = utf-8

# 换行类型

end_of_line = lf

# 行尾空格

trim_trailing_whitespace = true

# 文末空行

insert_final_newline = false

# 最大行宽

#max_line_length = off
```

### how to macth files in .editorconfig

```md
# 匹配所有字符 不含/

[\*][*.md]

# 匹配任意字符-数量任意

[tool/**]

# 匹配任意字符-数量一个

[tool/?.js]

# 匹配某一名字

[tool]

# 不匹配某名字

[!tool]

# 匹配给定字符

[node_module,docs,src,test]

# 匹配连续整数

[1..9999]

# 换行类型

end_of_line = lf

# 行尾空格

trim_trailing_whitespace = false

# 文末空行

insert_final_newline = false

# 最大行宽

#max_line_length =

# https://editorconfig.org

# https://editorconfig.org/#example-file
```

### the style of my .editorconfig

```md
# 顶级配置

root = true

[*]

# 缩进方式

indent_style = space

# 缩进大小

indent_size = 2

# 编码格式

charset = utf-8

# 换行类型

end_of_line = lf

# 行尾空格

trim_trailing_whitespace = true

# 文末空行

insert_final_newline = false

# 最大行宽

#max_line_length =
```

# 参考文献

https://editorconfig.org
https://github.com/sindresorhus/atom-editorconfig
https://www.jianshu.com/p/00ac7bd5e74e
