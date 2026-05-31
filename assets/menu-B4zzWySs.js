import{t as e}from"./supabase-Ddr9YjrG.js";async function t(){let{data:t}=await e.auth.getSession();t.session||window.location.assign(`./index.html`)}await t();var n=document.getElementById(`conteudo`),r=document.querySelectorAll(`.menu-button`),i=`ativos`,a=`licencas`,o=`softwares`,s=`ativo_softwares`,c=[{view:`cadastrar`,title:`Cadastrar ativo`,description:`Cadastre novos ativos de T.I.`,action:`Abrir cadastro`},{view:`consulta`,title:`Consulta`,description:`Consulte todos os seus ativos.`,action:`Abrir consulta`},{view:`editar`,title:`Editar ativo`,description:`Edite os dados cadastrados.`,action:`Abrir edição`},{view:`excluir`,title:`Excluir ativo`,description:`Remova ativos do sistema.`,action:`Abrir exclusão`},{view:`software`,title:`Cadastrar software`,description:`Registre softwares e identificadores.`,action:`Abrir cadastro`},{view:`associar`,title:`Associar software`,description:`Relacione softwares aos ativos.`,action:`Abrir associação`},{view:`licencas`,title:`Gerenciar licenças`,description:`Acompanhe licenças e disponibilidade.`,action:`Abrir licenças`},{view:`vencimentos`,title:`Vencimentos`,description:`Veja prazos e renovações.`,action:`Abrir vencimentos`},{view:`logs`,title:`Logs de auditoria`,description:`Acompanhe ações realizadas.`,action:`Abrir logs`}],l=Object.fromEntries(c.map(e=>[e.view,e.title]));function u(e){r.forEach(t=>{let n=t.dataset.view===e;t.classList.toggle(`bg-slate-100`,n),t.classList.toggle(`text-slate-950`,n)})}function d(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function f(e,t,n=``){return`
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <h2 class="text-3xl font-bold">${e}</h2>
        <p class="mt-2 text-sm text-slate-600">${t}</p>
      </div>
      ${n}
    </div>
  `}function p(){let e=c.slice(0,4).map(e=>`
    <button type="button" data-card-view="${e.view}" class="group text-left">
      <div class="flex h-40 items-end rounded-lg bg-slate-900 p-5 text-white transition group-hover:bg-blue-700">
        <span class="max-w-32 text-2xl font-bold leading-tight">${e.title}</span>
      </div>
      <h3 class="mt-4 text-lg font-bold">${e.title===`Cadastrar ativo`?`Cadastro de ativos`:e.title}</h3>
      <p class="mt-1 text-sm leading-6 text-slate-600">${e.description}</p>
    </button>
  `).join(``);n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Início`,`Aqui você encontra tudo o que precisa`,`<button type="button" data-card-view="cadastrar" class="rounded-md bg-black px-5 py-2 text-sm font-medium text-white hover:bg-slate-800">Chamada para ação</button>`)}

      <div class="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        ${e}
      </div>
    </section>
  `,document.querySelectorAll(`[data-card-view]`).forEach(e=>{e.addEventListener(`click`,()=>I(e.dataset.cardView))})}function m(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Cadastrar ativo`,`Preencha os dados abaixo para registrar um novo ativo de T.I.`)}

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
  `,document.querySelector(`[data-card-view="inicio"]`).addEventListener(`click`,()=>I(`inicio`)),v()}function h(e,t=`erro`){let n=document.getElementById(`cadastro-ativo-message`);n.className=`mt-5 rounded-md p-3 text-sm ${{erro:`bg-red-100 text-red-700`,sucesso:`bg-emerald-100 text-emerald-700`}[t]}`,n.textContent=e}function g(e,t){return String(e.get(t)??``).trim()}function _(e){return e?.code===`23505`?String(e.message).includes(`ativos_patrimonio_unique`)?`Já existe um ativo cadastrado com este patrimônio.`:String(e.message).includes(`ativos_numero_serie_unique`)?`Já existe um ativo cadastrado com este número de série.`:`Já existe um ativo cadastrado com uma informação única repetida.`:`Erro ao salvar ativo: ${e.message}`}function v(){let t=document.getElementById(`cadastro-ativo-form`),n=document.getElementById(`salvar-ativo`);t.addEventListener(`submit`,async r=>{r.preventDefault();let a=new FormData(t),{data:o}=await e.auth.getUser(),s={nome:g(a,`nome`),tipo:g(a,`tipo`),categoria:g(a,`categoria`),patrimonio:g(a,`patrimonio`),numero_serie:g(a,`numero_serie`),codigo_barras:g(a,`codigo_barras`),status:g(a,`status`),condicao_fisica:g(a,`condicao_fisica`),unidade:g(a,`unidade`),andar_sala:g(a,`andar_sala`),mesa_estacao:g(a,`mesa_estacao`),cidade:g(a,`cidade`),user_id:o.user?.id??null};n.disabled=!0,n.classList.add(`cursor-not-allowed`,`opacity-70`),n.textContent=`Salvando...`;let{error:c}=await e.from(i).insert(s);if(n.disabled=!1,n.classList.remove(`cursor-not-allowed`,`opacity-70`),n.textContent=`Salvar e Continuar`,c){if(c.code===`PGRST205`){h(`A tabela public.ativos ainda não existe no Supabase. Rode o SQL em database/ativos.sql no SQL Editor.`);return}h(_(c));return}t.reset(),h(`Ativo cadastrado com sucesso.`,`sucesso`)})}function y(e){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="py-4 pr-4 text-sm font-semibold">${d(e.nome)}</td>
      <td class="py-4 text-sm text-slate-600">${d(e.responsavel_nome||e.responsavel_email||`Responsável não informado`)}</td>
    </tr>
  `).join(``):`
      <tr>
        <td colspan="2" class="py-8 text-center text-sm text-slate-500">Nenhum ativo cadastrado ainda.</td>
      </tr>
    `}async function b(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Consulta`,`Consulte os ativos cadastrados no sistema.`)}

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
  `;let t=document.getElementById(`consulta-body`),r=document.getElementById(`consulta-search`),{data:a,error:o}=await e.from(i).select(`nome, created_at`).order(`created_at`,{ascending:!1});if(o){t.innerHTML=`
      <tr>
        <td colspan="2" class="px-5 py-8 text-center text-sm text-red-600">
          Erro ao consultar ativos: ${d(o.message)}
        </td>
      </tr>
    `;return}let s=a??[];t.innerHTML=y(s),r.addEventListener(`input`,()=>{let e=r.value.trim().toLowerCase();t.innerHTML=y(s.filter(t=>String(t.nome??``).toLowerCase().includes(e)))})}async function x(){let{data:t,error:n}=await e.from(i).select(`id, nome, tipo, status, created_at`).order(`created_at`,{ascending:!1});return{data:t??[],error:n}}function S(e,t,n){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${d(e.nome)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.tipo||`Não informado`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.status||`Não informado`)}</td>
      <td class="px-5 py-4 text-right">
        <button type="button" data-ativo-id="${e.id}" class="${n} rounded-md px-4 py-2 text-sm font-medium">
          ${t}
        </button>
      </td>
    </tr>
  `).join(``):`
      <tr>
        <td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhum ativo cadastrado ainda.</td>
      </tr>
    `}async function C(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Editar ativo`,`Selecione um ativo para editar suas informações principais.`)}

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
  `;let t=document.getElementById(`editar-body`),r=document.getElementById(`editar-message`),{data:a,error:o}=await x();if(o){t.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar ativos: ${d(o.message)}</td></tr>`;return}t.innerHTML=S(a,`Editar`,`bg-blue-600 text-white hover:bg-blue-700`),t.querySelectorAll(`[data-ativo-id]`).forEach(t=>{t.addEventListener(`click`,()=>{let r=a.find(e=>String(e.id)===t.dataset.ativoId);n.innerHTML=`
        <section class="mx-auto max-w-4xl">
          ${f(`Editar ativo`,`Atualize as informações de ${d(r.nome)}.`)}

          <form id="editar-ativo-form" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div class="grid gap-5 md:grid-cols-2">
              <label class="block text-sm font-semibold">
                Nome do ativo *
                <input name="nome" type="text" required value="${d(r.nome)}" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              </label>
              <label class="block text-sm font-semibold">
                Status *
                <input name="status" type="text" required value="${d(r.status||``)}" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              </label>
            </div>
            <div id="editar-form-message" class="mt-5 hidden rounded-md p-3 text-sm"></div>
            <div class="mt-8 flex justify-end gap-4">
              <button type="button" id="voltar-edicao" class="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium hover:bg-slate-50">Voltar</button>
              <button type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Salvar alterações</button>
            </div>
          </form>
        </section>
      `,document.getElementById(`voltar-edicao`).addEventListener(`click`,C),document.getElementById(`editar-ativo-form`).addEventListener(`submit`,async t=>{t.preventDefault();let n=new FormData(t.currentTarget),a=document.getElementById(`editar-form-message`),{data:o,error:s}=await e.from(i).update({nome:g(n,`nome`),status:g(n,`status`)}).eq(`id`,r.id).select(`id`);if(s){a.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,a.textContent=`Erro ao editar ativo: ${s.message}`;return}if(!o.length){a.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,a.textContent=`Nenhum ativo foi atualizado. Verifique as políticas do Supabase.`;return}a.className=`mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,a.textContent=`Ativo atualizado com sucesso.`})})}),r.className=`hidden`}async function w(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Excluir ativo`,`Selecione um ativo para remover do sistema.`)}

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
  `;let t=document.getElementById(`excluir-body`),r=document.getElementById(`excluir-message`),{data:a,error:o}=await x();if(o){t.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar ativos: ${d(o.message)}</td></tr>`;return}t.innerHTML=S(a,`Excluir`,`bg-red-600 text-white hover:bg-red-700`),t.querySelectorAll(`[data-ativo-id]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=a.find(e=>String(e.id)===t.dataset.ativoId);if(!window.confirm(`Deseja excluir o ativo "${n.nome}"?`))return;let{data:o,error:s}=await e.from(i).delete().eq(`id`,n.id).select(`id`);if(s){r.className=`mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700`,r.textContent=`Erro ao excluir ativo: ${s.message}`;return}if(!o.length){r.className=`mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700`,r.textContent=`Nenhum ativo foi excluído. Verifique as políticas do Supabase.`;return}r.className=`mb-4 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,r.textContent=`Ativo excluído com sucesso.`,w()})})}async function T(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Associar software`,`Relacione um software a um ativo cadastrado.`)}

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
  `;let t=document.getElementById(`associar-ativo`),r=document.getElementById(`associar-software`),i=document.getElementById(`associar-licenca`),o=document.getElementById(`associar-message`),c=document.getElementById(`associar-form`),[{data:l,error:u},{data:p,error:m},{data:h,error:_}]=await Promise.all([x(),A(),k()]);u?t.innerHTML=`<option value="">Erro ao carregar ativos</option>`:t.innerHTML=`<option value="">Selecione o ativo</option>`+l.map(e=>`<option value="${e.id}">${d(e.nome)}</option>`).join(``),m?r.innerHTML=`<option value="">Erro ao carregar softwares</option>`:r.innerHTML=`<option value="">Selecione o software</option>`+p.map(e=>`<option value="${e.id}">${d(e.nome)} ${e.versao?`- ${d(e.versao)}`:``}</option>`).join(``),_?i.innerHTML=`<option value="">Erro ao carregar licenças</option>`:i.innerHTML=`<option value="">Selecione a licença</option>`+h.filter(e=>Number(e.em_uso??0)<Number(e.quantidade??0)).map(e=>`<option value="${e.id}">${d(e.software)} ${e.chave?`- ${d(e.chave)}`:``} (${Number(e.quantidade??0)-Number(e.em_uso??0)} disponível)</option>`).join(``),await D(),c.addEventListener(`submit`,async t=>{t.preventDefault();let n=new FormData(c),{data:r}=await e.auth.getUser(),i={ativo_id:Number(n.get(`ativo_id`)),software_id:Number(n.get(`software_id`)),licenca_id:Number(n.get(`licenca_id`)),observacao:g(n,`observacao`),user_id:r.user?.id??null},l=h.find(e=>Number(e.id)===i.licenca_id);if(!l){o.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,o.textContent=`Selecione uma licença cadastrada.`;return}if(Number(l.em_uso??0)>=Number(l.quantidade??0)){o.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,o.textContent=`Esta licença não possui unidades disponíveis.`;return}let{error:u}=await e.from(s).insert(i);if(u){o.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,o.textContent=`Erro ao associar: ${u.message}`;return}let{error:d}=await e.from(a).update({em_uso:Number(l.em_uso??0)+1}).eq(`id`,l.id);if(d){o.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,o.textContent=`Associação salva, mas houve erro ao consumir a licença: ${d.message}`;return}c.reset(),o.className=`mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,o.textContent=`Software associado ao ativo com sucesso.`,T()})}function E(e){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${d(e.ativos?.nome||`Ativo removido`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.softwares?.nome||`Software removido`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.licencas?.chave||e.licencas?.software||`Licença removida`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.observacao||`-`)}</td>
    </tr>
  `).join(``):`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhuma associação cadastrada ainda.</td></tr>`}async function D(){let t=document.getElementById(`associacoes-body`);if(!t)return;let{data:n,error:r}=await e.from(s).select(`id, observacao, created_at, ativos(nome), softwares(nome), licencas(software, chave)`).order(`created_at`,{ascending:!1});if(r){t.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar associações: ${d(r.message)}</td></tr>`;return}t.innerHTML=E(n??[])}function O(e){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${d(e.software)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.chave||`Não informada`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.quantidade)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.em_uso)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.data_vencimento||`Sem vencimento`)}</td>
    </tr>
  `).join(``):`
      <tr>
        <td colspan="5" class="px-5 py-8 text-center text-sm text-slate-500">Nenhuma licença cadastrada ainda.</td>
      </tr>
    `}async function k(){let{data:t,error:n}=await e.from(a).select(`id, software, chave, quantidade, em_uso, data_vencimento, created_at`).order(`created_at`,{ascending:!1});return{data:t??[],error:n}}async function A(){let{data:t,error:n}=await e.from(o).select(`id, nome, versao, hostname, identificador, created_at`).order(`created_at`,{ascending:!1});return{data:t??[],error:n}}async function j(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Gerenciar licenças`,`Acompanhe licenças e disponibilidade.`)}

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
  `;let t=document.getElementById(`licenca-form`),r=document.getElementById(`licenca-message`);async function i(){let e=document.getElementById(`licencas-body`),{data:t,error:n}=await k();if(n){e.innerHTML=`<tr><td colspan="5" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar licenças: ${d(n.message)}</td></tr>`;return}let r=t.reduce((e,t)=>e+Number(t.quantidade??0),0),i=t.reduce((e,t)=>e+Number(t.em_uso??0),0);document.getElementById(`total-licencas`).textContent=String(r),document.getElementById(`licencas-em-uso`).textContent=String(i),document.getElementById(`licencas-disponiveis`).textContent=String(Math.max(r-i,0)),e.innerHTML=O(t)}t.addEventListener(`submit`,async n=>{n.preventDefault();let o=new FormData(t),{data:s}=await e.auth.getUser(),c={software:g(o,`software`),chave:g(o,`chave`),quantidade:Number(o.get(`quantidade`)||1),em_uso:0,data_vencimento:g(o,`data_vencimento`)||null,user_id:s.user?.id??null},{error:l}=await e.from(a).insert(c);if(l){r.className=`rounded-md bg-red-100 p-3 text-sm text-red-700 md:col-span-3`,r.textContent=`Erro ao cadastrar licença: ${l.message}`;return}t.reset(),r.className=`rounded-md bg-emerald-100 p-3 text-sm text-emerald-700 md:col-span-3`,r.textContent=`Licença cadastrada com sucesso.`,i()}),i()}async function M(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Vencimentos`,`Veja prazos de licenças e renovações.`)}

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
  `;let e=document.getElementById(`vencimentos-body`),{data:t,error:r}=await k();if(r){e.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar vencimentos: ${d(r.message)}</td></tr>`;return}let i=t.filter(e=>e.data_vencimento);if(!i.length){e.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhum vencimento cadastrado ainda.</td></tr>`;return}e.innerHTML=i.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${d(e.software)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">Licença</td>
      <td class="px-5 py-4 text-sm text-slate-600">${d(e.data_vencimento)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">Ativo</td>
    </tr>
  `).join(``)}function N(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Logs de auditoria`,`Acompanhe as ações realizadas no sistema.`)}

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
  `}function P(){n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(`Cadastrar software`,`Preencha os dados abaixo para registrar um novo software.`)}

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
  `;let t=document.getElementById(`software-form`),r=document.getElementById(`software-message`);t.addEventListener(`submit`,async n=>{n.preventDefault();let i=new FormData(t),{data:a}=await e.auth.getUser(),s={nome:g(i,`nome`),versao:g(i,`versao`),hostname:g(i,`hostname`),identificador:g(i,`identificador`),user_id:a.user?.id??null},{error:c}=await e.from(o).insert(s);if(c){r.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,r.textContent=`Erro ao cadastrar software: ${c.message}`;return}t.reset(),r.className=`mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,r.textContent=`Software cadastrado com sucesso.`})}function F(e){let t=l[e]??`Funcionalidade`;n.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${f(t,c.find(t=>t.view===e)?.description??`Gerencie esta funcionalidade do sistema.`)}

      <div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h3 class="text-lg font-bold">${t}</h3>
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
  `}function I(e){if(u(e),e===`inicio`){p();return}if(e===`cadastrar`){m();return}if(e===`consulta`){b();return}if(e===`software`){P();return}if(e===`editar`){C();return}if(e===`excluir`){w();return}if(e===`associar`){T();return}if(e===`licencas`){j();return}if(e===`vencimentos`){M();return}if(e===`logs`){N();return}F(e)}r.forEach(e=>{e.addEventListener(`click`,()=>I(e.dataset.view))}),I(`inicio`),document.getElementById(`logout`)?.addEventListener(`click`,async()=>{await e.auth.signOut(),window.location.href=`./index.html`});