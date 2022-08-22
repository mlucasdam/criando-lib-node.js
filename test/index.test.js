const getFile = require('../index')

const arrResult = 
[ 
    [
      {
        FileList: 'https://developer.mozilla.org/pt-BR/docs/Web/API/FileList'
      }
    ]
]
  


describe ('getFile::', () =>{
    it('deve ser uma função', () =>{
        expect(typeof getFile).toBe('function');
    })
    it('deve retornar array com resultados', async () =>{
        const result = await getFile('./test/arquivos/texto1.md');
        expect(result).toEqual(arrResult);
    })
    it('deve retornar mensagem "não há links"', async () =>{
        const result = await getFile('./test/arquivos/texto2.md');
        expect(result).toBe(['Não há links'])
    })
    it('deve lançar um erro na falta de arquivo', async () =>{
        const result = await getFile('./test/arquivos/texto2.md')
        expect(result).rejects.toThrow(/não há arquivos no diretorio/)
    })
})



