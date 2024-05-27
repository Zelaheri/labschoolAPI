const database = require('../database');


module.exports = {
    searchTurmas: () => {
        return new Promise(
            (accepted, rejected) => {
                database.query("SELECT * FROM turma", (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    // Metodo para pesquisar a turma pelo ID
    serchTurmaById: (codigo) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`SELECT * FROM turma WHERE id = ${codigo}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )

    },
    createTurma: (nome, descricao, quantidade_alunos) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`INSERT INTO turma (nome, descricao, quantidade_alunos) VALUES 
                                ('${nome}', '${descricao}', ${quantidade_alunos})`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    updateTurma: (id, nome, descricao, quantidade_alunos) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`UPDATE turma SET nome = '${nome}', descricao = '${descricao}', quantidade_alunos = '${quantidade_alunos}' WHERE id = ${id}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    deleteTurma: (id) => {
        return new Promise(
            (accepted, rejected) => {
                database.query(`DELETE FROM turma WHERE id = ${id}`, (error, result) => {
                    if (error) {
                        rejected(error)
                        return
                    }
                    accepted(result)
                })
            }
        )
    },
    AddAlunos:(id) => {
        return new Promise((accepted, rejected) => {
            database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos + 1 WHERE id = ${id}`, (error, result) => {
                if (error) {
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    },
    DelAluno:(id) => {
        return new Promise((accepted, rejected) => {
            database.query(`UPDATE turma SET quantidade_alunos = quantidade_alunos - 1 WHERE id = ${id}`, (error, result) => {
                if (error) {
                    rejected(error)
                    return
                }
                accepted(result)
            })
        })
    }
}