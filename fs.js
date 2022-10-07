const  {readFileSync, writeFileSync}=require('fs')
const first=readFileSync('./subfolder/file1.txt','utf8')
const second=readFileSync('./subfolder/file2.txt','utf8')
console.log(first,second)
writeFileSync('./subfolder/result-sync.txt',
`here is the result : ${first}, ${second}`,
{flag:'a'}
)
