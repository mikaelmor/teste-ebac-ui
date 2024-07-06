/// <reference types="cypress"/>
const perfil = require('../../fixtures/perfil.json')

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
      cy.get('#username').type ()
      cy.get('#password').type ()
      cy.get('.woocommerce-form > .button')
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, gabigoalpedro29')
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        
        cy.get('#username').type ('somebody@teste.com.br')
        cy.get('#password').type ('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')

    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha invãlida', () => {
        
        cy.get('#username').type ('gabigoalpedro29@gmail.com')
        cy.get('#password').type ('fdsfs123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail gabigoalpedro29@gmail.com está incorreta. Perdeu a senha?')

    });

     it('Deve fazer login com sucesso - Usando Fixture', () => {
        cy.fixture('perfil').then( dados => {
        cy.get('#username').type (dados.usuario)
        cy.get('#password').type (dados.senha)
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, gabigoalpedro29')
     });
        })

     });


