/// <reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso', () => {
      cy.get('#username').type ('juninho22@teste.com.br')
      cy.get('#password').type ('teste1234')
      cy.get('.woocommerce-form > .button').click()
      cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain' , 'Olá, juninho22 (não é juninho22? Sair')
    })


    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        
        cy.get('#username').type ('somebody@teste.com.br')
        cy.get('#password').type ('teste1234')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Endereço de e-mail desconhecido.')

    });

    it('Deve exibir uma mensagem de erro ao inserir uma senha invãlida', () => {
        
        cy.get('#username').type ('juninho22@teste.com.br')
        cy.get('#password').type ('fdsfs123')
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error').should('contain' , 'Erro: A senha fornecida para o e-mail juninho22@teste.com.br está incorreta. Perdeu a senha?')

    });

  })