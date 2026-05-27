import './style.css';
import { supabase } from './supabase.js';

const cadastroForm = document.getElementById('cadastro-form');
const messageDiv = document.getElementById('message');
const btnCadastro = document.getElementById('cadastrar');

function monstrarMensagem(texto, tipo = 'erro') {
    const classes = { erro: 'bg-red-100 text-red-600', sucesso: 'bg-emerald-100 text-emerald-600' };
    messageDiv.className = `mt-4 rounded-xl p-2 text-center text-sm ${classes[tipo]}`;
    messageDiv.textContent = texto;
};

function definirCarregamento(ativo){
    btnCadastro.disable = ativo;
    btnCadastro.classList.toggle('cursor-not-allowed', ativo);
    btnCadastro.classList.toggle('opacity-70', ativo);
    btnCadastro.textContent = ativo ? 'Cadastrando...' : 'Cadastrar';
}

function mensagemErroCadastro(error) {
  const mensagem = String(error.message ?? '').toLowerCase();

  if (error.status === 429 || mensagem.includes('rate limit')) {
    return 'Limite de envio de emails atingido. Aguarde alguns minutos e tente novamente, ou desative a confirmacao por email no Supabase durante os testes.';
  }

  if (mensagem.includes('already registered') || mensagem.includes('already been registered')) {
    return 'Este email ja esta cadastrado. Volte ao login para acessar sua conta.';
  }

  return `Erro: ${error.message}`;
}

cadastroForm.addEventListener('submit', async (event) => {event.preventDefault();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    messageDiv.classList.add('hidden')

    if (password !== confirmPassword){
        monstrarMensagem('As senhas informadas não dão match');
        return
    }

    definirCarregamento(true)

    const {error} = await supabase.auth.signUp({email, password});

    definirCarregamento(false)

    if (error){
        monstrarMensagem(mensagemErroCadastro(error));
        return;
    }

    cadastroForm.reset();
    monstrarMensagem('Usuário cadastrado com sucesso, agora você já pode fazer o login', 'sucesso')
})