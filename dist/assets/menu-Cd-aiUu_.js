import{t as e}from"./supabase-BPZRI79l.js";var t=document.getElementById(`conteudo`),n=document.querySelectorAll(`.menu-button`),r=`ativos`,i=`licencas`,a=`softwares`,o=`ativo_softwares`,s=[{view:`cadastrar`,title:`Cadastrar ativo`,description:`Cadastre novos ativos de T.I.`,action:`Abrir cadastro`},{view:`consulta`,title:`Consulta`,description:`Consulte todos os seus ativos.`,action:`Abrir consulta`},{view:`editar`,title:`Editar ativo`,description:`Edite os dados cadastrados.`,action:`Abrir edição`},{view:`excluir`,title:`Excluir ativo`,description:`Remova ativos do sistema.`,action:`Abrir exclusão`},{view:`software`,title:`Cadastrar software`,description:`Registre softwares e identificadores.`,action:`Abrir cadastro`},{view:`associar`,title:`Associar software`,description:`Relacione softwares aos ativos.`,action:`Abrir associação`},{view:`licencas`,title:`Gerenciar licenças`,description:`Acompanhe licenças e disponibilidade.`,action:`Abrir licenças`},{view:`vencimentos`,title:`Vencimentos`,description:`Veja prazos e renovações.`,action:`Abrir vencimentos`},{view:`logs`,title:`Logs de auditoria`,description:`Acompanhe ações realizadas.`,action:`Abrir logs`}],c=Object.fromEntries(s.map(e=>[e.view,e.title]));function l(e){n.forEach(t=>{let n=t.dataset.view===e;t.classList.toggle(`bg-slate-100`,n),t.classList.toggle(`text-slate-950`,n)})}function u(e){return String(e??``).replaceAll(`&`,`&amp;`).replaceAll(`<`,`&lt;`).replaceAll(`>`,`&gt;`).replaceAll(`"`,`&quot;`).replaceAll(`'`,`&#039;`)}function d(e,t,n=``){return`
    <div class="mb-8 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
      <div>
        <h2 class="text-3xl font-bold">${e}</h2>
        <p class="mt-2 text-sm text-slate-600">${t}</p>
      </div>
      ${n}
    </div>
  `}function f(){let e=s.slice(0,4).map(e=>`
    <button type="button" data-card-view="${e.view}" class="group text-left">
      <div class="flex h-40 items-end rounded-lg bg-slate-900 p-5 text-white transition group-hover:bg-blue-700">
        <span class="max-w-32 text-2xl font-bold leading-tight">${e.title}</span>
      </div>
      <h3 class="mt-4 text-lg font-bold">${e.title===`Cadastrar ativo`?`Cadastro de ativos`:e.title}</h3>
      <p class="mt-1 text-sm leading-6 text-slate-600">${e.description}</p>
    </button>
  `).join(``);t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Início`,`Aqui você encontra tudo o que precisa`,`<button type="button" data-card-view="cadastrar" class="rounded-md bg-black px-5 py-2 text-sm font-medium text-white hover:bg-slate-800">Chamada para ação</button>`)}

      <div class="grid gap-7 md:grid-cols-2 lg:grid-cols-4">
        ${e}
      </div>
    </section>
  `,document.querySelectorAll(`[data-card-view]`).forEach(e=>{e.addEventListener(`click`,()=>F(e.dataset.cardView))})}function p(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Cadastrar ativo`,`Preencha os dados abaixo para registrar um novo ativo de T.I.`)}

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
  `,document.querySelector(`[data-card-view="inicio"]`).addEventListener(`click`,()=>F(`inicio`)),_()}function m(e,t=`erro`){let n=document.getElementById(`cadastro-ativo-message`);n.className=`mt-5 rounded-md p-3 text-sm ${{erro:`bg-red-100 text-red-700`,sucesso:`bg-emerald-100 text-emerald-700`}[t]}`,n.textContent=e}function h(e,t){return String(e.get(t)??``).trim()}function g(e){return e?.code===`23505`?String(e.message).includes(`ativos_patrimonio_unique`)?`Já existe um ativo cadastrado com este patrimônio.`:String(e.message).includes(`ativos_numero_serie_unique`)?`Já existe um ativo cadastrado com este número de série.`:`Já existe um ativo cadastrado com uma informação única repetida.`:`Erro ao salvar ativo: ${e.message}`}function _(){let t=document.getElementById(`cadastro-ativo-form`),n=document.getElementById(`salvar-ativo`);t.addEventListener(`submit`,async i=>{i.preventDefault();let a=new FormData(t),{data:o}=await e.auth.getUser(),s={nome:h(a,`nome`),tipo:h(a,`tipo`),categoria:h(a,`categoria`),patrimonio:h(a,`patrimonio`),numero_serie:h(a,`numero_serie`),codigo_barras:h(a,`codigo_barras`),status:h(a,`status`),condicao_fisica:h(a,`condicao_fisica`),unidade:h(a,`unidade`),andar_sala:h(a,`andar_sala`),mesa_estacao:h(a,`mesa_estacao`),cidade:h(a,`cidade`),user_id:o.user?.id??null};n.disabled=!0,n.classList.add(`cursor-not-allowed`,`opacity-70`),n.textContent=`Salvando...`;let{error:c}=await e.from(r).insert(s);if(n.disabled=!1,n.classList.remove(`cursor-not-allowed`,`opacity-70`),n.textContent=`Salvar e Continuar`,c){if(c.code===`PGRST205`){m(`A tabela public.ativos ainda não existe no Supabase. Rode o SQL em database/ativos.sql no SQL Editor.`);return}m(g(c));return}t.reset(),m(`Ativo cadastrado com sucesso.`,`sucesso`)})}function v(e){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="py-4 pr-4 text-sm font-semibold">${u(e.nome)}</td>
      <td class="py-4 text-sm text-slate-600">${u(e.responsavel_nome||e.responsavel_email||`Responsável não informado`)}</td>
    </tr>
  `).join(``):`
      <tr>
        <td colspan="2" class="py-8 text-center text-sm text-slate-500">Nenhum ativo cadastrado ainda.</td>
      </tr>
    `}async function y(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Consulta`,`Consulte os ativos cadastrados no sistema.`)}

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
  `;let n=document.getElementById(`consulta-body`),i=document.getElementById(`consulta-search`),{data:a,error:o}=await e.from(r).select(`nome, created_at`).order(`created_at`,{ascending:!1});if(o){n.innerHTML=`
      <tr>
        <td colspan="2" class="px-5 py-8 text-center text-sm text-red-600">
          Erro ao consultar ativos: ${u(o.message)}
        </td>
      </tr>
    `;return}let s=a??[];n.innerHTML=v(s),i.addEventListener(`input`,()=>{let e=i.value.trim().toLowerCase();n.innerHTML=v(s.filter(t=>String(t.nome??``).toLowerCase().includes(e)))})}async function b(){let{data:t,error:n}=await e.from(r).select(`id, nome, tipo, status, created_at`).order(`created_at`,{ascending:!1});return{data:t??[],error:n}}function x(e,t,n){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${u(e.nome)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.tipo||`Não informado`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.status||`Não informado`)}</td>
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
    `}async function S(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Editar ativo`,`Selecione um ativo para editar suas informações principais.`)}

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
  `;let n=document.getElementById(`editar-body`),i=document.getElementById(`editar-message`),{data:a,error:o}=await b();if(o){n.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar ativos: ${u(o.message)}</td></tr>`;return}n.innerHTML=x(a,`Editar`,`bg-blue-600 text-white hover:bg-blue-700`),n.querySelectorAll(`[data-ativo-id]`).forEach(n=>{n.addEventListener(`click`,()=>{let i=a.find(e=>String(e.id)===n.dataset.ativoId);t.innerHTML=`
        <section class="mx-auto max-w-4xl">
          ${d(`Editar ativo`,`Atualize as informações de ${u(i.nome)}.`)}

          <form id="editar-ativo-form" class="rounded-lg border border-slate-200 bg-white p-5 shadow-sm">
            <div class="grid gap-5 md:grid-cols-2">
              <label class="block text-sm font-semibold">
                Nome do ativo *
                <input name="nome" type="text" required value="${u(i.nome)}" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              </label>
              <label class="block text-sm font-semibold">
                Status *
                <input name="status" type="text" required value="${u(i.status||``)}" class="mt-2 w-full rounded-md border border-slate-300 px-3 py-2 text-sm font-normal outline-none focus:border-blue-600">
              </label>
            </div>
            <div id="editar-form-message" class="mt-5 hidden rounded-md p-3 text-sm"></div>
            <div class="mt-8 flex justify-end gap-4">
              <button type="button" id="voltar-edicao" class="rounded-md border border-slate-300 px-6 py-2 text-sm font-medium hover:bg-slate-50">Voltar</button>
              <button type="submit" class="rounded-md bg-blue-600 px-6 py-2 text-sm font-medium text-white hover:bg-blue-700">Salvar alterações</button>
            </div>
          </form>
        </section>
      `,document.getElementById(`voltar-edicao`).addEventListener(`click`,S),document.getElementById(`editar-ativo-form`).addEventListener(`submit`,async t=>{t.preventDefault();let n=new FormData(t.currentTarget),a=document.getElementById(`editar-form-message`),{data:o,error:s}=await e.from(r).update({nome:h(n,`nome`),status:h(n,`status`)}).eq(`id`,i.id).select(`id`);if(s){a.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,a.textContent=`Erro ao editar ativo: ${s.message}`;return}if(!o.length){a.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,a.textContent=`Nenhum ativo foi atualizado. Verifique as políticas do Supabase.`;return}a.className=`mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,a.textContent=`Ativo atualizado com sucesso.`})})}),i.className=`hidden`}async function C(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Excluir ativo`,`Selecione um ativo para remover do sistema.`)}

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
  `;let n=document.getElementById(`excluir-body`),i=document.getElementById(`excluir-message`),{data:a,error:o}=await b();if(o){n.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar ativos: ${u(o.message)}</td></tr>`;return}n.innerHTML=x(a,`Excluir`,`bg-red-600 text-white hover:bg-red-700`),n.querySelectorAll(`[data-ativo-id]`).forEach(t=>{t.addEventListener(`click`,async()=>{let n=a.find(e=>String(e.id)===t.dataset.ativoId);if(!window.confirm(`Deseja excluir o ativo "${n.nome}"?`))return;let{data:o,error:s}=await e.from(r).delete().eq(`id`,n.id).select(`id`);if(s){i.className=`mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700`,i.textContent=`Erro ao excluir ativo: ${s.message}`;return}if(!o.length){i.className=`mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700`,i.textContent=`Nenhum ativo foi excluído. Verifique as políticas do Supabase.`;return}i.className=`mb-4 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,i.textContent=`Ativo excluído com sucesso.`,C()})})}async function w(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Associar software`,`Relacione um software a um ativo cadastrado.`)}

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
  `;let n=document.getElementById(`associar-ativo`),r=document.getElementById(`associar-software`),a=document.getElementById(`associar-licenca`),s=document.getElementById(`associar-message`),c=document.getElementById(`associar-form`),[{data:l,error:f},{data:p,error:m},{data:g,error:_}]=await Promise.all([b(),k(),O()]);f?n.innerHTML=`<option value="">Erro ao carregar ativos</option>`:n.innerHTML=`<option value="">Selecione o ativo</option>`+l.map(e=>`<option value="${e.id}">${u(e.nome)}</option>`).join(``),m?r.innerHTML=`<option value="">Erro ao carregar softwares</option>`:r.innerHTML=`<option value="">Selecione o software</option>`+p.map(e=>`<option value="${e.id}">${u(e.nome)} ${e.versao?`- ${u(e.versao)}`:``}</option>`).join(``),_?a.innerHTML=`<option value="">Erro ao carregar licenças</option>`:a.innerHTML=`<option value="">Selecione a licença</option>`+g.filter(e=>Number(e.em_uso??0)<Number(e.quantidade??0)).map(e=>`<option value="${e.id}">${u(e.software)} ${e.chave?`- ${u(e.chave)}`:``} (${Number(e.quantidade??0)-Number(e.em_uso??0)} disponível)</option>`).join(``),await E(),c.addEventListener(`submit`,async t=>{t.preventDefault();let n=new FormData(c),{data:r}=await e.auth.getUser(),a={ativo_id:Number(n.get(`ativo_id`)),software_id:Number(n.get(`software_id`)),licenca_id:Number(n.get(`licenca_id`)),observacao:h(n,`observacao`),user_id:r.user?.id??null},l=g.find(e=>Number(e.id)===a.licenca_id);if(!l){s.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,s.textContent=`Selecione uma licença cadastrada.`;return}if(Number(l.em_uso??0)>=Number(l.quantidade??0)){s.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,s.textContent=`Esta licença não possui unidades disponíveis.`;return}let{error:u}=await e.from(o).insert(a);if(u){s.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,s.textContent=`Erro ao associar: ${u.message}`;return}let{error:d}=await e.from(i).update({em_uso:Number(l.em_uso??0)+1}).eq(`id`,l.id);if(d){s.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,s.textContent=`Associação salva, mas houve erro ao consumir a licença: ${d.message}`;return}c.reset(),s.className=`mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,s.textContent=`Software associado ao ativo com sucesso.`,w()})}function T(e){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${u(e.ativos?.nome||`Ativo removido`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.softwares?.nome||`Software removido`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.licencas?.chave||e.licencas?.software||`Licença removida`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.observacao||`-`)}</td>
    </tr>
  `).join(``):`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhuma associação cadastrada ainda.</td></tr>`}async function E(){let t=document.getElementById(`associacoes-body`);if(!t)return;let{data:n,error:r}=await e.from(o).select(`id, observacao, created_at, ativos(nome), softwares(nome), licencas(software, chave)`).order(`created_at`,{ascending:!1});if(r){t.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar associações: ${u(r.message)}</td></tr>`;return}t.innerHTML=T(n??[])}function D(e){return e.length?e.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${u(e.software)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.chave||`Não informada`)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.quantidade)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.em_uso)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.data_vencimento||`Sem vencimento`)}</td>
    </tr>
  `).join(``):`
      <tr>
        <td colspan="5" class="px-5 py-8 text-center text-sm text-slate-500">Nenhuma licença cadastrada ainda.</td>
      </tr>
    `}async function O(){let{data:t,error:n}=await e.from(i).select(`id, software, chave, quantidade, em_uso, data_vencimento, created_at`).order(`created_at`,{ascending:!1});return{data:t??[],error:n}}async function k(){let{data:t,error:n}=await e.from(a).select(`id, nome, versao, hostname, identificador, created_at`).order(`created_at`,{ascending:!1});return{data:t??[],error:n}}async function A(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Gerenciar licenças`,`Acompanhe licenças e disponibilidade.`)}

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
  `;let n=document.getElementById(`licenca-form`),r=document.getElementById(`licenca-message`);async function a(){let e=document.getElementById(`licencas-body`),{data:t,error:n}=await O();if(n){e.innerHTML=`<tr><td colspan="5" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar licenças: ${u(n.message)}</td></tr>`;return}let r=t.reduce((e,t)=>e+Number(t.quantidade??0),0),i=t.reduce((e,t)=>e+Number(t.em_uso??0),0);document.getElementById(`total-licencas`).textContent=String(r),document.getElementById(`licencas-em-uso`).textContent=String(i),document.getElementById(`licencas-disponiveis`).textContent=String(Math.max(r-i,0)),e.innerHTML=D(t)}n.addEventListener(`submit`,async t=>{t.preventDefault();let o=new FormData(n),{data:s}=await e.auth.getUser(),c={software:h(o,`software`),chave:h(o,`chave`),quantidade:Number(o.get(`quantidade`)||1),em_uso:0,data_vencimento:h(o,`data_vencimento`)||null,user_id:s.user?.id??null},{error:l}=await e.from(i).insert(c);if(l){r.className=`rounded-md bg-red-100 p-3 text-sm text-red-700 md:col-span-3`,r.textContent=`Erro ao cadastrar licença: ${l.message}`;return}n.reset(),r.className=`rounded-md bg-emerald-100 p-3 text-sm text-emerald-700 md:col-span-3`,r.textContent=`Licença cadastrada com sucesso.`,a()}),a()}async function j(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Vencimentos`,`Veja prazos de licenças e renovações.`)}

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
  `;let e=document.getElementById(`vencimentos-body`),{data:n,error:r}=await O();if(r){e.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-red-600">Erro ao carregar vencimentos: ${u(r.message)}</td></tr>`;return}let i=n.filter(e=>e.data_vencimento);if(!i.length){e.innerHTML=`<tr><td colspan="4" class="px-5 py-8 text-center text-sm text-slate-500">Nenhum vencimento cadastrado ainda.</td></tr>`;return}e.innerHTML=i.map(e=>`
    <tr class="border-b border-slate-100">
      <td class="px-5 py-4 text-sm font-semibold">${u(e.software)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">Licença</td>
      <td class="px-5 py-4 text-sm text-slate-600">${u(e.data_vencimento)}</td>
      <td class="px-5 py-4 text-sm text-slate-600">Ativo</td>
    </tr>
  `).join(``)}function M(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Logs de auditoria`,`Acompanhe as ações realizadas no sistema.`)}

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
  `}function N(){t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(`Cadastrar software`,`Preencha os dados abaixo para registrar um novo software.`)}

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
  `;let n=document.getElementById(`software-form`),r=document.getElementById(`software-message`);n.addEventListener(`submit`,async t=>{t.preventDefault();let i=new FormData(n),{data:o}=await e.auth.getUser(),s={nome:h(i,`nome`),versao:h(i,`versao`),hostname:h(i,`hostname`),identificador:h(i,`identificador`),user_id:o.user?.id??null},{error:c}=await e.from(a).insert(s);if(c){r.className=`mt-5 rounded-md bg-red-100 p-3 text-sm text-red-700`,r.textContent=`Erro ao cadastrar software: ${c.message}`;return}n.reset(),r.className=`mt-5 rounded-md bg-emerald-100 p-3 text-sm text-emerald-700`,r.textContent=`Software cadastrado com sucesso.`})}function P(e){let n=c[e]??`Funcionalidade`;t.innerHTML=`
    <section class="mx-auto max-w-6xl">
      ${d(n,s.find(t=>t.view===e)?.description??`Gerencie esta funcionalidade do sistema.`)}

      <div class="rounded-lg border border-slate-200 bg-white p-8 shadow-sm">
        <h3 class="text-lg font-bold">${n}</h3>
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
  `}function F(e){if(l(e),e===`inicio`){f();return}if(e===`cadastrar`){p();return}if(e===`consulta`){y();return}if(e===`software`){N();return}if(e===`editar`){S();return}if(e===`excluir`){C();return}if(e===`associar`){w();return}if(e===`licencas`){A();return}if(e===`vencimentos`){j();return}if(e===`logs`){M();return}P(e)}n.forEach(e=>{e.addEventListener(`click`,()=>F(e.dataset.view))}),F(`inicio`);