import './style.css';
import { supabase } from './supabase.js';

async function validaSessao() {
  const { data } = await supabase.auth.getSession();

  if (!data.session) {
    window.location.assign('./index.html');
  }
}

await validaSessao();

const conteudo = document.getElementById('conteudo');
const menuButtons = document.querySelectorAll('.menu-button');
const ATIVOS_TABLE = 'ativos';
const LICENCAS_TABLE = 'licencas';
const SOFTWARES_TABLE = 'softwares';
const ASSOCIACOES_TABLE = 'ativo_softwares';

const menuItems = [
  {
    view: 'cadastrar',
    title: 'Cadastrar ativo',
    description: 'Cadastre novos ativos de T.I.',
    action: 'Abrir cadastro',
  },
  {
    view: 'consulta',
    title: 'Consulta',
    description: 'Consulte todos os seus ativos.',
    action: 'Abrir consulta',
  },
  {
    view: 'editar',
    title: 'Editar ativo',
    description: 'Edite os dados cadastrados.',
    action: 'Abrir edição',
  },
  {
    view: 'excluir',
    title: 'Excluir ativo',
    description: 'Remova ativos do sistema.',
    action: 'Abrir exclusão',
  },
  {
    view: 'software',
    title: 'Cadastrar software',
    description: 'Registre softwares e identificadores.',
    action: 'Abrir cadastro',
  },
  {
    view: 'associar',
    title: 'Associar software',
    description: 'Relacione softwares aos ativos.',
    action: 'Abrir associação',
  },
  {
    view: 'licencas',
    title: 'Gerenciar licenças',
    description: 'Acompanhe licenças e disponibilidade.',
    action: 'Abrir licenças',
  },
  {
    view: 'vencimentos',
    title: 'Vencimentos',
    description: 'Veja prazos e renovações.',
    action: 'Abrir vencimentos',
  },
  {
    view: 'logs',
    title: 'Logs de auditoria',
    description: 'Acompanhe ações realizadas.',
    action: 'Abrir logs',
  },
];

const titlesByView = Object.fromEntries(menuItems.map((item) => [item.view, item.title]));

function setActive(view) {
  menuButtons.forEach((button) => {
    const isActive = button.dataset.view === view;
    button.classList.toggle('bg-slate-100', isActive);
    button.classList.toggle('text-slate-950', isActive);
  });
}

function escapeHtml(value) {
  return String(value ?? '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

function pageHeader(title, description, actionButton = '') {
  return `
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <h2 class="text-3xl font-bold">${title}</h2>
        <p class="mt-2 text-sm text-slate-600">${description}</p>
      </div>
      ${actionButton}
    </div>
  `;
}

function renderInicio() {
  const cards = menuItems.slice(0, 4).map((item) => `
    <button type="button" data-card-view="${item.view}" class="group text-left">
      <div class="flex h-40 items-end rounded-lg bg-slate-900 p-5 text-white transition group-hover:bg-blue-700">
        <span class="max-w-32 text-2xl font-bold leading-tight">${item.title}</span>
      </div>
      <h3 class="mt-4 text-lg font-bold">${item.title === 'Cadastrar ativo' ? 'Cadastro de ativos' : item.title}</h3>
      <p class="mt-1 text-sm leading-6 text-slate-600">${item.description}</p>
    </button>
  `).join('');

  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader(
        'Início',
        'Aqui você encontra tudo o que precisa',
        '<button type="button" data-card-view="cadastrar" class="rounded-md bg-black px-5 py-2 text-sm font-medium text-white hover:bg-slate-800">Chamada para ação</button>'
      )}

      <div class="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        ${cards}
      </div>
    </section>
  `;

  document.querySelectorAll('[data-card-view]').forEach((card) => {
    card.addEventListener('click', () => renderView(card.dataset.cardView));
  });
}

function renderCadastroAtivo() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Cadastrar ativo', 'Preencha os dados abaixo para registrar um novo ativo de T.I.')}

      <form id="cadastro-ativo-form" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h3 class="mb-4 border-b border-blue-600 pb-2 text-sm font-semibold text-blue-700">Dados Gerais</h3>

        <div class="grid gap-5 md:grid-cols-2">
          <label class="block text-sm font-semibold">
            Nome do ativo *
            <input name="nome" type="text" required placeholder="Digite o nome do ativo" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Tipo de ativo *
            <select name="tipo" required class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              <option value="">Selecione o tipo do ativo</option>
              <option>Notebook</option>
              <option>Desktop</option>
              <option>Monitor</option>
              <option>Servidor</option>
              <option>Impressora</option>
            </select>
          </label>

          <label class="block text-sm font-semibold">
            Categoria *
            <select name="categoria" required class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              <option value="">Selecione a categoria do ativo</option>
              <option>Hardware</option>
              <option>Rede</option>
              <option>Periférico</option>
            </select>
          </label>

          <label class="block text-sm font-semibold">
            Patrimônio / Tombamento
            <input name="patrimonio" type="text" placeholder="Digite o número de patrimônio" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Número de série (Serial Number)
            <input name="numero_serie" type="text" placeholder="Digite o número de série" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Etiqueta / Código de barras (opcional)
            <input name="codigo_barras" type="text" placeholder="Digite ou escaneie o código" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Status do ativo *
            <input name="status" type="text" required placeholder="Digite o status do ativo" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Condição física
            <select name="condicao_fisica" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              <option value="">Selecione a condição</option>
              <option>Novo</option>
              <option>Bom</option>
              <option>Manutenção</option>
              <option>Danificado</option>
            </select>
          </label>
        </div>

        <div class="my-5 border-t border-slate-200 pt-4">
          <h3 class="text-base font-bold">Localização</h3>
        </div>

        <div class="grid gap-5 md:grid-cols-3">
          <label class="block text-sm font-semibold">
            Unidade / Filial*
            <select name="unidade" required class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              <option value="">Selecione a unidade</option>
              <option>Matriz</option>
              <option>Filial</option>
            </select>
          </label>

          <label class="block text-sm font-semibold">
            Andar / Sala*
            <input name="andar_sala" type="text" required placeholder="Digite o andar ou sala" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Mesa / Estação*
            <input name="mesa_estacao" type="text" required placeholder="Digite a mesa ou estação" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold md:col-span-2">
            Cidade *
            <input name="cidade" type="text" required placeholder="Digite a cidade" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>
        </div>

        <div id="cadastro-ativo-message" class="mt-5 hidden rounded-md p-3 text-sm"></div>

        <div class="mt-8 flex flex-wrap justify-end gap-4">
          <button type="button" data-card-view="inicio" class="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium hover:bg-slate-50">Cancelar</button>
          <button type="reset" class="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50">Limpar</button>
          <button id="salvar-ativo" type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Salvar e Continuar</button>
        </div>
      </form>
    </section>
  `;

  document.querySelector('[data-card-view="inicio"]').addEventListener('click', () => renderView('inicio'));
  setupCadastroAtivoForm();
}

function showCadastroAtivoMessage(text, type = 'erro') {
  const message = document.getElementById('cadastro-ativo-message');
  const classes = {
    erro: 'bg-red-100 text-red-700',
    sucesso: 'bg-emerald-100 text-emerald-700',
  };

  message.className = `mt-5 rounded-md p-3 text-sm ${classes[type]}`;
  message.textContent = text;
}

function getFormValue(formData, field) {
  return String(formData.get(field) ?? '').trim();
}

function isLicencaAtiva(licenca) {
  if (!licenca?.data_vencimento) {
    return false;
  }

  const hoje = new Date();
  hoje.setHours(0, 0, 0, 0);

  const vencimento = new Date(licenca.data_vencimento);
  vencimento.setHours(0, 0, 0, 0);

  return vencimento > hoje;
}

function getResponsibleName(user) {
  return user?.user_metadata?.name || user?.email || 'Usuário autenticado';
}

function getAtivoErrorMessage(error) {
  if (error?.code === '23505') {
    if (String(error.message).includes('ativos_patrimonio_unique')) {
      return 'Já existe um ativo cadastrado com este patrimônio.';
    }

    if (String(error.message).includes('ativos_numero_serie_unique')) {
      return 'Já existe um ativo cadastrado com este número de série.';
    }

    return 'Já existe um ativo cadastrado com uma informação única repetida.';
  }

  return `Erro ao salvar ativo: ${error.message}`;
}

function setupCadastroAtivoForm() {
  const form = document.getElementById('cadastro-ativo-form');
  const submitButton = document.getElementById('salvar-ativo');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    const { data: authData } = await supabase.auth.getUser();
    const ativo = {
      nome: getFormValue(formData, 'nome'),
      tipo: getFormValue(formData, 'tipo'),
      categoria: getFormValue(formData, 'categoria'),
      patrimonio: getFormValue(formData, 'patrimonio'),
      numero_serie: getFormValue(formData, 'numero_serie'),
      codigo_barras: getFormValue(formData, 'codigo_barras'),
      status: getFormValue(formData, 'status'),
      condicao_fisica: getFormValue(formData, 'condicao_fisica'),
      unidade: getFormValue(formData, 'unidade'),
      andar_sala: getFormValue(formData, 'andar_sala'),
      mesa_estacao: getFormValue(formData, 'mesa_estacao'),
      cidade: getFormValue(formData, 'cidade'),
      user_id: authData.user?.id ?? null,
    };

    submitButton.disabled = true;
    submitButton.classList.add('cursor-not-allowed', 'opacity-70');
    submitButton.textContent = 'Salvando...';

    const { error } = await supabase.from(ATIVOS_TABLE).insert(ativo);

    submitButton.disabled = false;
    submitButton.classList.remove('cursor-not-allowed', 'opacity-70');
    submitButton.textContent = 'Salvar e Continuar';

    if (error) {
      if (error.code === 'PGRST205') {
        showCadastroAtivoMessage('A tabela public.ativos ainda não existe no Supabase. Rode o SQL em database/ativos.sql no SQL Editor.');
        return;
      }

      showCadastroAtivoMessage(getAtivoErrorMessage(error));
      return;
    }

    form.reset();
    showCadastroAtivoMessage('Ativo cadastrado com sucesso.', 'sucesso');
  });
}

function renderConsultaRows(ativos) {
  if (!ativos.length) {
    return `
      <tr>
        <td colspan="2" class="py-8 text-center text-sm text-slate-500">Nenhum ativo cadastrado ainda.</td>
      </tr>
    `;
  }

  return ativos.map((ativo) => `
    <tr class="border-b border-slate-100">
      <td class="py-4 pr-4 text-sm font-semibold">${escapeHtml(ativo.nome)}</td>
      <td class="py-4 text-sm text-slate-600">${escapeHtml(ativo.responsavel_nome || ativo.responsavel_email || 'Responsável não informado')}</td>
    </tr>
  `).join('');
}

async function renderConsulta() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Consulta', 'Consulte os ativos cadastrados no sistema.')}

      <div class="mb-5 flex gap-3">
        <input id="consulta-search" type="search" placeholder="Buscar itens..." class="w-full rounded-md border border-slate-300 px-4 py-2 text-sm outline-none focus:border-blue-600">
        <button type="button" class="rounded-md border border-slate-300 px-5 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">Filtrar</button>
      </div>

      <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full min-w-[520px] border-collapse">
          <thead>
            <tr class="border-b border-slate-200 text-left text-xs font-bold text-slate-500">
              <th class="px-5 py-3">Nome do ativo</th>
              <th class="px-5 py-3">Responsável</th>
            </tr>
          </thead>
          <tbody id="consulta-body" class="divide-y divide-slate-100">
            <tr>
              <td colspan="2" class="px-5 py-8 text-center text-sm text-slate-500">Carregando ativos...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;

  const tbody = document.getElementById('consulta-body');
  const search = document.getElementById('consulta-search');
  let { data, error } = await supabase
    .from(ATIVOS_TABLE)
    .select('nome, created_at')
    .order('created_at', { ascending: false });

  if (error) {
    tbody.innerHTML = `
      <tr>
        <td colspan="2" class="px-5 py-8 text-center text-sm text-red-600">
          Erro ao consultar ativos: ${escapeHtml(error.message)}
        </td>
      </tr>
    `;
    return;
  }

  const ativos = data ?? [];
  tbody.innerHTML = renderConsultaRows(ativos);

  search.addEventListener('input', () => {
    const term = search.value.trim().toLowerCase();
    const filtered = ativos.filter((ativo) => {
      const nome = String(ativo.nome ?? '').toLowerCase();
      return nome.includes(term);
    });

    tbody.innerHTML = renderConsultaRows(filtered);
  });
}

async function fetchAtivos() {
  let { data, error } = await supabase
    .from(ATIVOS_TABLE)
    .select('id, nome, tipo, status, created_at')
    .order('created_at', { ascending: false });

  return { data: data ?? [], error };
}

function renderAtivosActionRows(ativos, actionLabel, actionClass) {
  if (!ativos.length) {
    return `
      <tr>
        <td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhum ativo cadastrado ainda.</td>
      </tr>
    `;
  }

  return ativos.map((ativo) => `
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${escapeHtml(ativo.nome)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(ativo.tipo || 'Não informado')}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(ativo.status || 'Não informado')}</td>
      <td class="px-5 py-4 text-right">
        <button type="button" data-ativo-id="${ativo.id}" class="${actionClass} rounded-md px-4 py-2 text-sm font-medium">
          ${actionLabel}
        </button>
      </td>
    </tr>
  `).join('');
}

async function renderEditarAtivo() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Editar ativo', 'Selecione um ativo para editar suas informações principais.')}

      <div id="editar-message" class="mb-4 hidden rounded-md p-3 text-sm"></div>
      <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full min-w-[720px] border-collapse">
          <thead>
            <tr class="border-b border-slate-200 text-left text-xs font-bold text-slate-500">
              <th class="px-5 py-3">Nome do ativo</th>
              <th class="px-5 py-3">Tipo</th>
              <th class="px-5 py-3">Status</th>
              <th class="px-5 py-3 text-right">Ação</th>
            </tr>
          </thead>
          <tbody id="editar-body">
            <tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Carregando ativos...</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;

  const tbody = document.getElementById('editar-body');
  const message = document.getElementById('editar-message');
  const { data: ativos, error } = await fetchAtivos();

  if (error) {
    tbody.innerHTML = `<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar ativos: ${escapeHtml(error.message)}</td></tr>`;
    return;
  }

  tbody.innerHTML = renderAtivosActionRows(ativos, 'Editar', 'bg-blue-600 text-white hover:bg-blue-700');

  tbody.querySelectorAll('[data-ativo-id]').forEach((button) => {
    button.addEventListener('click', () => {
      const ativo = ativos.find((item) => String(item.id) === button.dataset.ativoId);

      conteudo.innerHTML = `
        <section class="mx-auto max-w-4xl">
          ${pageHeader('Editar ativo', `Atualize as informações de ${escapeHtml(ativo.nome)}.`)}

          <form id="editar-ativo-form" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div class="grid gap-5 md:grid-cols-2">
              <label class="block text-sm font-semibold">
                Nome do ativo *
                <input name="nome" type="text" required value="${escapeHtml(ativo.nome)}" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              </label>
              <label class="block text-sm font-semibold">
                Status *
                <input name="status" type="text" required value="${escapeHtml(ativo.status || '')}" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              </label>
            </div>
            <div id="editar-form-message" class="mt-5 hidden rounded-md p-3 text-sm"></div>
            <div class="mt-8 flex justify-end gap-4">
              <button type="button" id="voltar-edicao" class="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium hover:bg-slate-50">Voltar</button>
              <button type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Salvar alterações</button>
            </div>
          </form>
        </section>
      `;

      document.getElementById('voltar-edicao').addEventListener('click', renderEditarAtivo);
      document.getElementById('editar-ativo-form').addEventListener('submit', async (event) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const formMessage = document.getElementById('editar-form-message');
        const { data: updatedRows, error: updateError } = await supabase
          .from(ATIVOS_TABLE)
          .update({
            nome: getFormValue(formData, 'nome'),
            status: getFormValue(formData, 'status'),
          })
          .eq('id', ativo.id)
          .select('id');

        if (updateError) {
          formMessage.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
          formMessage.textContent = `Erro ao editar ativo: ${updateError.message}`;
          return;
        }

        if (!updatedRows.length) {
          formMessage.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
          formMessage.textContent = 'Nenhum ativo foi atualizado. Verifique as políticas do Supabase.';
          return;
        }

        formMessage.className = 'mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700';
        formMessage.textContent = 'Ativo atualizado com sucesso.';
      });
    });
  });

  message.className = 'hidden';
}

async function renderExcluirAtivo() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Excluir ativo', 'Selecione um ativo para remover do sistema.')}

      <div id="excluir-message" class="mb-4 hidden rounded-md p-3 text-sm"></div>
      <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full min-w-[720px] border-collapse">
          <thead>
            <tr class="border-b border-slate-200 text-left text-xs font-bold text-slate-500">
              <th class="px-5 py-3">Nome do ativo</th>
              <th class="px-5 py-3">Tipo</th>
              <th class="px-5 py-3">Status</th>
              <th class="px-5 py-3 text-right">Ação</th>
            </tr>
          </thead>
          <tbody id="excluir-body">
            <tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Carregando ativos...</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;

  const tbody = document.getElementById('excluir-body');
  const message = document.getElementById('excluir-message');
  const { data: ativos, error } = await fetchAtivos();

  if (error) {
    tbody.innerHTML = `<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar ativos: ${escapeHtml(error.message)}</td></tr>`;
    return;
  }

  tbody.innerHTML = renderAtivosActionRows(ativos, 'Excluir', 'bg-red-600 text-white hover:bg-red-700');

  tbody.querySelectorAll('[data-ativo-id]').forEach((button) => {
    button.addEventListener('click', async () => {
      const ativo = ativos.find((item) => String(item.id) === button.dataset.ativoId);
      const confirmDelete = window.confirm(`Deseja excluir o ativo "${ativo.nome}"?`);

      if (!confirmDelete) return;

      const { data: deletedRows, error: deleteError } = await supabase
        .from(ATIVOS_TABLE)
        .delete()
        .eq('id', ativo.id)
        .select('id');

      if (deleteError) {
        message.className = 'mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700';
        message.textContent = `Erro ao excluir ativo: ${deleteError.message}`;
        return;
      }

      if (!deletedRows.length) {
        message.className = 'mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700';
        message.textContent = 'Nenhum ativo foi excluído. Verifique as políticas do Supabase.';
        return;
      }

      message.className = 'mb-4 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700';
      message.textContent = 'Ativo excluído com sucesso.';
      renderExcluirAtivo();
    });
  });
}

async function renderAssociarSoftware() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Associar software', 'Relacione um software a um ativo cadastrado.')}

      <form id="associar-form" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h3 class="mb-6 border-b border-blue-600 pb-2 text-sm font-semibold text-blue-700">Associação</h3>
        <div class="grid gap-5 md:grid-cols-2">
          <label class="block text-sm font-semibold">
            Ativo *
            <select id="associar-ativo" name="ativo_id" required class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              <option value="">Carregando ativos...</option>
            </select>
          </label>
          <label class="block text-sm font-semibold">
            Software *
            <select id="associar-software" name="software_id" required class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              <option value="">Carregando softwares...</option>
            </select>
          </label>
          <label class="block text-sm font-semibold">
            Licença *
            <select id="associar-licenca" name="licenca_id" required class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              <option value="">Carregando licenças...</option>
            </select>
          </label>
          <label class="block text-sm font-semibold">
            Observação
            <input name="observacao" type="text" placeholder="Opcional" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>
        </div>
        <div id="associar-message" class="mt-5 hidden rounded-md p-3 text-sm"></div>
        <div class="mt-8 flex justify-end gap-4">
          <button type="reset" class="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50">Limpar</button>
          <button type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Associar</button>
        </div>
      </form>

      <div class="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full min-w-[760px] border-collapse">
          <thead>
            <tr class="border-b border-slate-200 text-left text-xs font-bold text-slate-500">
              <th class="px-5 py-3">Ativo</th>
              <th class="px-5 py-3">Software</th>
              <th class="px-5 py-3">Licença</th>
              <th class="px-5 py-3">Observação</th>
            </tr>
          </thead>
          <tbody id="associacoes-body">
            <tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Carregando associações...</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;

  const ativoSelect = document.getElementById('associar-ativo');
  const softwareSelect = document.getElementById('associar-software');
  const licencaSelect = document.getElementById('associar-licenca');
  const message = document.getElementById('associar-message');
  const form = document.getElementById('associar-form');
  const [{ data: ativos, error: ativosError }, { data: softwares, error: softwaresError }, { data: licencas, error: licencasError }] = await Promise.all([
    fetchAtivos(),
    fetchSoftwares(),
    fetchLicencas(),
  ]);

  if (ativosError) {
    ativoSelect.innerHTML = '<option value="">Erro ao carregar ativos</option>';
  } else {
    ativoSelect.innerHTML = '<option value="">Selecione o ativo</option>' + ativos
    .map((ativo) => `<option value="${ativo.id}">${escapeHtml(ativo.nome)}</option>`)
    .join('');
  }

  if (softwaresError) {
    softwareSelect.innerHTML = '<option value="">Erro ao carregar softwares</option>';
  } else {
    softwareSelect.innerHTML = '<option value="">Selecione o software</option>' + softwares
      .map((software) => `<option value="${software.id}">${escapeHtml(software.nome)} ${software.versao ? `- ${escapeHtml(software.versao)}` : ''}</option>`)
      .join('');
  }

  if (licencasError) {
    licencaSelect.innerHTML = '<option value="">Erro ao carregar licenças</option>';
  } else {
    const licencasDisponiveis = licencas.filter((licenca) =>
      Number(licenca.em_uso ?? 0) < Number(licenca.quantidade ?? 0) && isLicencaAtiva(licenca)
    );
    licencaSelect.innerHTML = '<option value="">Selecione a licença</option>' + licencasDisponiveis
      .map((licenca) => `<option value="${licenca.id}">${escapeHtml(licenca.software)} ${licenca.chave ? `- ${escapeHtml(licenca.chave)}` : ''} (${Number(licenca.quantidade ?? 0) - Number(licenca.em_uso ?? 0)} disponível)</option>`)
      .join('');
  }

  await loadAssociacoes();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const { data: authData } = await supabase.auth.getUser();
    const associacao = {
      ativo_id: Number(formData.get('ativo_id')),
      software_id: Number(formData.get('software_id')),
      licenca_id: Number(formData.get('licenca_id')),
      observacao: getFormValue(formData, 'observacao'),
      user_id: authData.user?.id ?? null,
    };

    const licencaSelecionada = licencas.find((licenca) => Number(licenca.id) === associacao.licenca_id);

    if (!licencaSelecionada) {
      message.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
      message.textContent = 'Selecione uma licença cadastrada.';
      return;
    }

    if (Number(licencaSelecionada.em_uso ?? 0) >= Number(licencaSelecionada.quantidade ?? 0)) {
      message.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
      message.textContent = 'Esta licença não possui unidades disponíveis.';
      return;
    }

    if (!isLicencaAtiva(licencaSelecionada)) {
      message.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
      message.textContent = 'Esta licença está expirada e não pode ser associada.';
      return;
    }

    const { error } = await supabase.from(ASSOCIACOES_TABLE).insert(associacao);

    if (error) {
      message.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
      message.textContent = `Erro ao associar: ${error.message}`;
      return;
    }

    const { error: licencaError } = await supabase
      .from(LICENCAS_TABLE)
      .update({ em_uso: Number(licencaSelecionada.em_uso ?? 0) + 1 })
      .eq('id', licencaSelecionada.id);

    if (licencaError) {
      message.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
      message.textContent = `Associação salva, mas houve erro ao consumir a licença: ${licencaError.message}`;
      return;
    }

    form.reset();
    message.className = 'mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700';
    message.textContent = 'Software associado ao ativo com sucesso.';
    renderAssociarSoftware();
  });
}

function renderAssociacaoRows(associacoes) {
  if (!associacoes.length) {
    return '<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhuma associação cadastrada ainda.</td></tr>';
  }

  return associacoes.map((associacao) => `
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${escapeHtml(associacao.ativos?.nome || 'Ativo removido')}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(associacao.softwares?.nome || 'Software removido')}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(associacao.licencas?.chave || associacao.licencas?.software || 'Licença removida')}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(associacao.observacao || '-')}</td>
    </tr>
  `).join('');
}

async function loadAssociacoes() {
  const body = document.getElementById('associacoes-body');

  if (!body) return;

  const { data, error } = await supabase
    .from(ASSOCIACOES_TABLE)
    .select('id, observacao, created_at, ativos(nome), softwares(nome), licencas(software, chave)')
    .order('created_at', { ascending: false });

  if (error) {
    body.innerHTML = `<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar associações: ${escapeHtml(error.message)}</td></tr>`;
    return;
  }

  body.innerHTML = renderAssociacaoRows(data ?? []);
}

function renderLicencaRows(licencas) {
  if (!licencas.length) {
    return `
      <tr>
        <td colspan="5" class="px-5 py-8 text-center text-sm text-slate-500">Nenhuma licença cadastrada ainda.</td>
      </tr>
    `;
  }

  return licencas.map((licenca) => `
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${escapeHtml(licenca.software)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(licenca.chave || 'Não informada')}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(licenca.quantidade)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(licenca.em_uso)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(licenca.data_vencimento || 'Sem vencimento')}</td>
    </tr>
  `).join('');
}

async function fetchLicencas() {
  const { data, error } = await supabase
    .from(LICENCAS_TABLE)
    .select('id, software, chave, quantidade, em_uso, data_vencimento, created_at')
    .order('created_at', { ascending: false });

  return { data: data ?? [], error };
}

async function fetchSoftwares() {
  const { data, error } = await supabase
    .from(SOFTWARES_TABLE)
    .select('id, nome, versao, hostname, identificador, created_at')
    .order('created_at', { ascending: false });

  return { data: data ?? [], error };
}

async function renderGerenciarLicencas() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Gerenciar licenças', 'Acompanhe licenças e disponibilidade.')}

      <div class="grid gap-4 md:grid-cols-3">
        <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-slate-500">Licenças cadastradas</p>
          <strong id="total-licencas" class="mt-2 block text-3xl">0</strong>
        </div>
        <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-slate-500">Disponíveis</p>
          <strong id="licencas-disponiveis" class="mt-2 block text-3xl">0</strong>
        </div>
        <div class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
          <p class="text-sm text-slate-500">Em uso</p>
          <strong id="licencas-em-uso" class="mt-2 block text-3xl">0</strong>
        </div>
      </div>

      <div class="mt-6 rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h3 class="text-lg font-bold">Nova licença</h3>
        <form id="licenca-form" class="mt-5 grid gap-5 md:grid-cols-4">
          <input name="software" type="text" required placeholder="Software" class="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600">
          <input name="chave" type="text" placeholder="Chave da licença" class="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600">
          <input name="quantidade" type="number" min="1" required placeholder="Quantidade" class="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600">
          <input name="data_vencimento" type="date" class="rounded-md border border-slate-300 px-3 py-2 text-sm outline-none focus:border-blue-600">
          <div id="licenca-message" class="hidden rounded-md p-3 text-sm md:col-span-3"></div>
          <button type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Cadastrar</button>
        </form>
      </div>

      <div class="mt-6 overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full min-w-[760px] border-collapse">
          <thead>
            <tr class="border-b border-slate-200 text-left text-xs font-bold text-slate-500">
              <th class="px-5 py-3">Software</th>
              <th class="px-5 py-3">Chave</th>
              <th class="px-5 py-3">Quantidade</th>
              <th class="px-5 py-3">Em uso</th>
              <th class="px-5 py-3">Vencimento</th>
            </tr>
          </thead>
          <tbody id="licencas-body">
            <tr><td colspan="5" class="px-5 py-8 text-center text-sm text-slate-500">Carregando licenças...</td></tr>
          </tbody>
        </table>
      </div>
    </section>
  `;

  const form = document.getElementById('licenca-form');
  const message = document.getElementById('licenca-message');

  async function loadLicencas() {
    const body = document.getElementById('licencas-body');
    const { data: licencas, error } = await fetchLicencas();

    if (error) {
      body.innerHTML = `<tr><td colspan="5" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar licenças: ${escapeHtml(error.message)}</td></tr>`;
      return;
    }

    const total = licencas.reduce((sum, licenca) => sum + Number(licenca.quantidade ?? 0), 0);
    const emUso = licencas.reduce((sum, licenca) => sum + Number(licenca.em_uso ?? 0), 0);
    const disponiveis = licencas
      .filter(isLicencaAtiva)
      .reduce((sum, licenca) => sum + Math.max(Number(licenca.quantidade ?? 0) - Number(licenca.em_uso ?? 0), 0), 0);

    document.getElementById('total-licencas').textContent = String(total);
    document.getElementById('licencas-em-uso').textContent = String(emUso);
    document.getElementById('licencas-disponiveis').textContent = String(Math.max(disponiveis, 0));
    body.innerHTML = renderLicencaRows(licencas);
  }

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const { data: authData } = await supabase.auth.getUser();
    const licenca = {
      software: getFormValue(formData, 'software'),
      chave: getFormValue(formData, 'chave'),
      quantidade: Number(formData.get('quantidade') || 1),
      em_uso: 0,
      data_vencimento: getFormValue(formData, 'data_vencimento') || null,
      user_id: authData.user?.id ?? null,
    };

    const { error } = await supabase.from(LICENCAS_TABLE).insert(licenca);

    if (error) {
      message.className = 'rounded-md bg-red-100 p-3 text-sm text-red-700 md:col-span-3';
      message.textContent = `Erro ao cadastrar licença: ${error.message}`;
      return;
    }

    form.reset();
    message.className = 'rounded-md bg-emerald-100 p-3 text-sm text-emerald-700 md:col-span-3';
    message.textContent = 'Licença cadastrada com sucesso.';
    loadLicencas();
  });

  loadLicencas();
}

async function renderVencimentos() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Vencimentos', 'Veja prazos de licenças e renovações.')}

      <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full min-w-[640px] border-collapse">
          <thead>
            <tr class="border-b border-slate-200 text-left text-xs font-bold text-slate-500">
              <th class="px-5 py-3">Item</th>
              <th class="px-5 py-3">Tipo</th>
              <th class="px-5 py-3">Vencimento</th>
              <th class="px-5 py-3">Status</th>
            </tr>
          </thead>
          <tbody id="vencimentos-body">
            <tr>
              <td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Carregando vencimentos...</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;

  const body = document.getElementById('vencimentos-body');
  const { data: licencas, error } = await fetchLicencas();

  if (error) {
    body.innerHTML = `<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar vencimentos: ${escapeHtml(error.message)}</td></tr>`;
    return;
  }

  const vencimentos = licencas.filter((licenca) => licenca.data_vencimento);

  if (!vencimentos.length) {
    body.innerHTML = '<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhum vencimento cadastrado ainda.</td></tr>';
    return;
  }

  body.innerHTML = vencimentos.map((licenca) => {
    const ativo = isLicencaAtiva(licenca);
    return `
      <tr class="border-b border-slate-100">
        <td class="px-5 py-4 text-sm font-semibold">${escapeHtml(licenca.software)}</td>
        <td class="px-5 py-4 text-sm text-slate-600">Licença</td>
        <td class="px-5 py-4 text-sm text-slate-600">${escapeHtml(licenca.data_vencimento)}</td>
        <td class="px-5 py-4 text-sm ${ativo ? 'text-emerald-700' : 'text-red-600'}">${ativo ? 'Ativo' : 'Inativo'}</td>
      </tr>
    `;
  }).join('');
}

function renderLogs() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Logs de auditoria', 'Acompanhe as ações realizadas no sistema.')}

      <div class="overflow-x-auto rounded-lg border border-slate-200 bg-white">
        <table class="w-full min-w-[640px] border-collapse">
          <thead>
            <tr class="border-b border-slate-200 text-left text-xs font-bold text-slate-500">
              <th class="px-5 py-3">Data</th>
              <th class="px-5 py-3">Ação</th>
              <th class="px-5 py-3">Usuário</th>
              <th class="px-5 py-3">Detalhes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhum log registrado ainda.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  `;
}

function renderCadastroSoftware() {
  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader('Cadastrar software', 'Preencha os dados abaixo para registrar um novo software.')}

      <form id="software-form" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
        <h3 class="mb-6 border-b border-blue-600 pb-2 text-sm font-semibold text-blue-700">Dados Gerais</h3>

        <div class="grid gap-10 md:grid-cols-2">
          <label class="block text-sm font-semibold">
            Nome *
            <input name="nome" type="text" required placeholder="Digite o nome do software" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Versao *
            <input name="versao" type="text" required placeholder="Digite a versao do software" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            Hostname
            <input name="hostname" type="text" placeholder="Digite o hostname / provedor" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>

          <label class="block text-sm font-semibold">
            ID
            <input name="identificador" type="text" placeholder="Digite o identificador" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
          </label>
        </div>

        <div id="software-message" class="mt-5 hidden rounded-md p-3 text-sm"></div>

        <div class="mt-8 flex flex-wrap justify-end gap-4">
          <button type="reset" class="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium text-slate-500 hover:bg-slate-50">Limpar</button>
          <button type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Salvar</button>
        </div>
      </form>
    </section>
  `;

  const form = document.getElementById('software-form');
  const message = document.getElementById('software-message');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const { data: authData } = await supabase.auth.getUser();
    const software = {
      nome: getFormValue(formData, 'nome'),
      versao: getFormValue(formData, 'versao'),
      hostname: getFormValue(formData, 'hostname'),
      identificador: getFormValue(formData, 'identificador'),
      user_id: authData.user?.id ?? null,
    };

    const { error } = await supabase.from(SOFTWARES_TABLE).insert(software);

    if (error) {
      message.className = 'mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700';
      message.textContent = `Erro ao cadastrar software: ${error.message}`;
      return;
    }

    form.reset();
    message.className = 'mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700';
    message.textContent = 'Software cadastrado com sucesso.';
  });
}

function renderStandardPage(view) {
  const title = titlesByView[view] ?? 'Funcionalidade';
  const item = menuItems.find((menuItem) => menuItem.view === view);

  conteudo.innerHTML = `
    <section class="mx-auto max-w-6xl">
      ${pageHeader(title, item?.description ?? 'Gerencie esta funcionalidade do sistema.')}

      <div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h3 class="text-lg font-bold">${title}</h3>
        <p class="mt-2 text-sm leading-6 text-slate-600">Esta área segue o mesmo padrão visual do sistema e está pronta para receber os campos desta funcionalidade.</p>
        <div class="mt-6 grid gap-4 md:grid-cols-3">
          <div class="rounded-md border border-slate-200 p-4">
            <span class="text-xs font-semibold uppercase text-slate-500">Etapa 1</span>
            <p class="mt-2 text-sm font-semibold">Dados gerais</p>
          </div>
          <div class="rounded-md border border-slate-200 p-4">
            <span class="text-xs font-semibold uppercase text-slate-500">Etapa 2</span>
            <p class="mt-2 text-sm font-semibold">Validação</p>
          </div>
          <div class="rounded-md border border-slate-200 p-4">
            <span class="text-xs font-semibold uppercase text-slate-500">Etapa 3</span>
            <p class="mt-2 text-sm font-semibold">Confirmação</p>
          </div>
        </div>
      </div>
    </section>
  `;
}

function renderView(view) {
  setActive(view);

  if (view === 'inicio') {
    renderInicio();
    return;
  }

  if (view === 'cadastrar') {
    renderCadastroAtivo();
    return;
  }

  if (view === 'consulta') {
    renderConsulta();
    return;
  }

  if (view === 'software') {
    renderCadastroSoftware();
    return;
  }

  if (view === 'editar') {
    renderEditarAtivo();
    return;
  }

  if (view === 'excluir') {
    renderExcluirAtivo();
    return;
  }

  if (view === 'associar') {
    renderAssociarSoftware();
    return;
  }

  if (view === 'licencas') {
    renderGerenciarLicencas();
    return;
  }

  if (view === 'vencimentos') {
    renderVencimentos();
    return;
  }

  if (view === 'logs') {
    renderLogs();
    return;
  }

  renderStandardPage(view);
}

menuButtons.forEach((button) => {
  button.addEventListener('click', () => renderView(button.dataset.view));
});

renderView('inicio');

document.getElementById('logout')?.addEventListener('click', async () => {
  await supabase.auth.signOut();
  window.location.href = './index.html';
});