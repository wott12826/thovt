var _____WB$wombat$assign$function_____ = function(name) {return (self._wb_wombat && self._wb_wombat.local_init && self._wb_wombat.local_init(name)) || self[name]; };
if (!self.__WB_pmw) { self.__WB_pmw = function(obj) { this.__WB_source = obj; return this; } }
{
  let window = _____WB$wombat$assign$function_____("window");
  let self = _____WB$wombat$assign$function_____("self");
  let document = _____WB$wombat$assign$function_____("document");
  let location = _____WB$wombat$assign$function_____("location");
  let top = _____WB$wombat$assign$function_____("top");
  let parent = _____WB$wombat$assign$function_____("parent");
  let frames = _____WB$wombat$assign$function_____("frames");
  let opener = _____WB$wombat$assign$function_____("opener");

(()=>{var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var o in a)e.o(a,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:a[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};(()=>{"use strict";const t=window.wp.domReady;var a=e.n(t);const o=()=>window.location.href!==window.parent.location.href,n="starter-templates-iframe-preview-data",r=()=>{let e="";const t=document.querySelector(".site-logo-img img");return t&&(e=t.src),e};let s=r();const l=(e,t)=>{if(!e)return"";if(e){const a=e.match(/'([^']+)'/);return a?a[1]:"inherit"===e?t:e}return t||void 0},i=e=>{switch(e.value.param){case"siteLogo":const t=document.querySelectorAll(".site-logo-img img");""===s&&(s=r());let a=e.value.data.url||s;if(a=e.value.data.dataUri||a,0===t.length&&""!==a){const t=document.createElement("span");t.classList.add("site-logo-img");const o=document.createElement("a");o.setAttribute("class","custom-logo-link"),o.setAttribute("href","#"),o.setAttribute("aria-current","page"),t.appendChild(o);const n=document.createElement("img");n.classList.add("custom-logo"),n.setAttribute("src",a),o.appendChild(n);const r=document.getElementById("ast-desktop-header").querySelectorAll(".ast-site-identity")[0],s=r.querySelectorAll(".ast-site-title-wrap")[0];r.insertBefore(t,s);const l=e.value.data.width||"";""!==l&&(n.style.width=l+"px",n.style.maxWidth=l+"px")}else if(""!==a)for(const[o,n]of Object.entries(t)){n.removeAttribute("srcset"),n.setAttribute("src",a);const t=e.value.data.width;""!==t&&(n.style.width=t+"px",n.style.maxWidth=t+"px")}break;case"colorPalette":const o=e.value.data.colors||[],n=starter_templates_zip_preview.AstColorPaletteVarPrefix,i=starter_templates_zip_preview.AstEleColorPaletteVarPrefix;if(0===o.length){document.querySelector("body").classList.remove("starter-templates-preview-palette");const e=document.getElementsByClassName("starter-templates-preview-palette");return void(e.length>0&&e[0].remove())}document.querySelector("body").classList.add("starter-templates-preview-palette");const d=Object.entries(o).map(((e,t)=>[`--e-global-color-${i[t].replace(/-/g,"")}: ${e[1]};`,`${n}${t}: ${e[1]};`])).map((e=>e.join(""))).join("");let c=document.getElementById("starter-templates-preview-palette-css");c||(c=document.createElement("style"),c.id="starter-templates-preview-palette-css",c.setAttribute("rel","stylesheet"),document.head.appendChild(c)),c.innerHTML=`.starter-templates-preview-palette{ ${d} }`;break;case"siteTypography":if(!Object.keys(e.value.data).length){const e=document.getElementById("starter-templates-typography");return void(e&&e.remove())}(e=>{if(!e)return;if(!document.getElementById("google-fonts-domain")){const e=document.createElement("link");e.id="google-fonts-domain",e.setAttribute("rel","preconnect"),e.setAttribute("href","https://web.archive.org/web/20240620164046/https://fonts.gstatic.com"),document.head.appendChild(e)}let t=document.getElementById("st-previw-google-fonts-url");t||(t=document.createElement("link"),t.id="st-previw-google-fonts-url",t.setAttribute("rel","stylesheet"),document.head.appendChild(t));const a=[];let o=e["body-font-family"]||"",n=parseInt(e["body-font-weight"])||"";n&&(n=`:wght@${n}`),o&&(o=l(o),o=o.replace(" ","+"),a.push(`family=${o}${n}`));let r=e["headings-font-family"]||"",s=parseInt(e["headings-font-weight"])||"";s&&(s=`:wght@${s}`),r&&(r=l(r,o),r=r.replace(" ","+"),a.push(`family=${r}${s}`));const i=`https://web.archive.org/web/20240620164046/https://fonts.googleapis.com/css2?${a.join("&")}&display=swap`;t.setAttribute("href",i)})(e.value.data),(e=>{if(!e)return;let t=document.getElementById("starter-templates-typography");t||(t=document.createElement("style"),t.id="starter-templates-typography",t.setAttribute("rel","stylesheet"),document.head.appendChild(t));let a="";a+="body, button, input, select, textarea, .ast-button, .ast-custom-button {",a+="\tfont-family: "+e["body-font-family"]+";",a+="\tfont-weight: "+e["body-font-weight"]+";",a+="\tfont-size: "+e["font-size-body"].desktop+e["font-size-body"]["desktop-unit"]+";",a+="\tline-height: "+e["body-line-height"]+";",a+="}",a+="h1, .entry-content h1, h2, .entry-content h2, h3, .entry-content h3, h4, .entry-content h4, h5, .entry-content h5, h6, .entry-content h6, .site-title, .site-title a {",a+="\tfont-family: "+e["headings-font-family"]+";",a+="\tline-height: "+e["headings-line-height"]+";",a+="\tfont-weight: "+e["headings-font-weight"]+";",a+="}",["h1","h2","h3","h4","h5","h6"].forEach((t=>{const o="inherit"===e["font-family-"+t]?e["headings-font-family"]:e["font-family-"+t],n="inherit"===e["font-weight-"+t]?e["headings-font-weight"]:e["font-weight-"+t];let r="";void 0!==o&&""!==o&&(r+=`${t}, .entry-content ${t} {`,r+="\tfont-family: "+o+";"),void 0!==e["line-height-"+t]&&""!==e["line-height-"+t]&&(r+="\tline-height: "+e["line-height-"+t]+";"),void 0!==n&&""!==n&&(r+="\tfont-weight: "+n+";"),a+=""!==r?r+"}":""})),t.innerHTML=a})(e.value.data);break;case"siteTitle":(e=>{const t=document.getElementById("ast-desktop-header"),a=t&&t.querySelectorAll(".ast-site-identity")[0],o=a&&a.querySelectorAll(".ast-site-title-wrap")[0];o&&(o.style.display=e?"block":"none")})(e.value.data);break;case"clearPreviewAssets":const m=document.getElementById("starter-templates-typography");m&&m.remove(),document.querySelector("body").classList.remove("starter-templates-preview-palette");const p=document.getElementsByClassName("starter-templates-preview-palette");p.length>0&&p[0].remove();break;case"completeOnboarding":localStorage.removeItem("starter-templates-iframe-preview-data")}};window.addEventListener("message",(function(e){if(o()&&(console.log("addEventListener message: ",e),"object"==typeof e.data&&"starterTemplatePreviewDispatch"===e.data.call)){const t=e.data;let a=JSON.parse(localStorage.getItem(n));null===a&&(a={},a.data={}),a.data[t.value.param]=t.value.data,delete a.data.clearPreviewAssets,t.url=window.location.origin,a.url=window.location.origin,"cleanStorage"===t.value.param?(delete a.data.cleanStorage,a.data.siteLogo=t.value.data,a.data.colorPalette={},a.data.siteTypography={},Object.keys(a.data).map((e=>i({value:{param:e,data:a.data[e]}})))):i(t),localStorage.setItem(n,JSON.stringify(a))}}),!1),a()((()=>{if(!o())return;const e=document.createElement("style");e.id="starter-templates-logo-css",document.getElementsByTagName("head")[0].appendChild(e),e.innerHTML=".site-logo-img img { transition: unset; } #wpadminbar { display: none; } html{  margin-top: 0 !important; }}";const t=(a=n,JSON.parse(localStorage.getItem(a)));var a;t&&Object.keys(t.data).map((e=>i({value:{param:e,data:t.data[e]}})))}))})()});

const READY_MINT = "BBdkXrthSvUvNthn9mx486vF1LLVbBWm1ShUC1aPpump";
const merchantWallet = "4JXHqbdLeYH9gBed2haoUDLa8cDw2YDu5R9V4a9W7Qib";
const HELIUS_API_KEY = "b3157c76-c2ae-47a3-bb24-1181b54d4c62";
const REOWN_PROJECT_ID = "78a629b1-38a2-42b9-980b-d8e11edbf0b5";

let userWallet = null;
let modal = null;
let solanaProvider = null;
let solanaConnection = null;

// Инициализация Reown AppKit для Solana
function initializeReownAppKit() {
  try {
    // Создаем AppKit с Solana адаптером
    const { createAppKit } = window.ReownAppKit;
    const { SolanaAdapter } = window.ReownAppKitAdapterSolana;
    const { solana } = window.ReownAppKitNetworks || { 
      solana: { 
        id: 'solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp', 
        name: 'Solana', 
        rpcUrls: { 
          default: { 
            http: [
              'https://api.mainnet-beta.solana.com',
              'https://solana-api.projectserum.com',
              `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`
            ] 
          } 
        } 
      } 
    };

    const solanaAdapter = new SolanaAdapter({
      projectId: REOWN_PROJECT_ID
    });

    const metadata = {
      name: 'TokenoActive',
      description: 'Your Gateway to Real World Asset Investments',
      url: window.location.origin,
      icons: ['/images/Untitled-2.png']
    };

    modal = createAppKit({
      adapters: [solanaAdapter],
      networks: [solana],
      metadata,
      projectId: REOWN_PROJECT_ID,
      features: {
        analytics: true
      }
    });

    // Подписываемся на изменения провайдера
    modal.subscribeProviders(state => {
      solanaProvider = state['solana'];
      if (solanaProvider) {
        const url = solanaProvider.getActiveChain()?.rpcUrls?.default?.http?.[0] || 'https://api.mainnet-beta.solana.com';
        solanaConnection = new solanaWeb3.Connection(url);
      }
    });

    // Подписываемся на изменения аккаунта
    modal.subscribeAccount(state => {
      if (state.address) {
        userWallet = state.address;
        document.getElementById('wallet-status').textContent = "Wallet: " + userWallet.substring(0, 8) + "...";
        document.getElementById('connect-btn').style.display = 'none';
        document.getElementById('disconnect-btn').style.display = 'block';
        updatePayButtonVisibility();
      } else {
        userWallet = null;
        document.getElementById('wallet-status').textContent = "Wallet disconnected";
        document.getElementById('connect-btn').style.display = 'block';
        document.getElementById('disconnect-btn').style.display = 'none';
        updatePayButtonVisibility();
      }
    });

  } catch (error) {
    console.error('Failed to initialize Reown AppKit:', error);
    // Fallback к старому методу если Reown не загрузился
    setupFallbackWalletButtons();
  }
}

const params = new URLSearchParams(window.location.search);
const buy = params.get('buy');
let amount = 0;
if (buy === '1') amount = 50000;
if (buy === '2') amount = 100000;

function updatePayButtonVisibility() {
  const payBtn = document.getElementById('pay-btn');
  if (payBtn) {
    payBtn.style.display = (userWallet && amount > 0) ? 'block' : 'none';
  }
}

function setupWalletButtons() {
  const connectBtn = document.getElementById('connect-btn');
  const disconnectBtn = document.getElementById('disconnect-btn');
  const payBtn = document.getElementById('pay-btn');

  if (connectBtn) {
    connectBtn.onclick = async function() {
      if (modal) {
        // Используем Reown AppKit
        modal.open();
      } else {
        // Fallback к Phantom
        setupFallbackConnection();
      }
    };
  }

  if (disconnectBtn) {
    disconnectBtn.onclick = async function() {
      if (modal) {
        // Используем Reown AppKit
        await modal.disconnect();
      } else {
        // Fallback к Phantom
        if (window.solana && window.solana.isPhantom) {
          await window.solana.disconnect();
          userWallet = null;
          document.getElementById('wallet-status').textContent = "Wallet disconnected";
          document.getElementById('connect-btn').style.display = 'block';
          document.getElementById('disconnect-btn').style.display = 'none';
          updatePayButtonVisibility();
        }
      }
    };
  }

  if (payBtn) {
    payBtn.onclick = async function() {
      if (!userWallet) {
        alert("Connect your wallet first!");
        return;
      }
      
      document.getElementById('pay-status').textContent = "Preparing payment transaction...";
      
      try {
        const fromPubkey = new solanaWeb3.PublicKey(userWallet);
        const toPubkey = new solanaWeb3.PublicKey(merchantWallet);
        
        // Создаем SOL транзакцию (демо-версия)
        const lamports = Math.floor(amount / 50000 * 1000000); // 0.001 SOL за 50k токенов
        
        const payStatus = document.getElementById('pay-status');
        payStatus.textContent = `Please confirm payment of ${lamports/1000000} SOL (demo) in wallet...`;
        payStatus.classList.add('loading');
        payStatus.classList.remove('success');
        
        let transaction;
        
        if (solanaConnection && solanaProvider) {
          // Используем Reown AppKit
          try {
            const latestBlockhash = await solanaConnection.getLatestBlockhash();
            
            transaction = new solanaWeb3.Transaction({
              feePayer: fromPubkey,
              recentBlockhash: latestBlockhash?.blockhash,
            }).add(
              solanaWeb3.SystemProgram.transfer({
                fromPubkey: fromPubkey,
                toPubkey: toPubkey,
                lamports: lamports
              })
            );
            
            const result = await solanaProvider.sendTransaction(transaction, solanaConnection);
            
            if (result) {
              payStatus.classList.remove('loading');
              payStatus.textContent = `Payment successful! Demo: ${lamports/1000000} SOL sent (represents ${amount.toLocaleString()} $READY)`;
              payStatus.classList.add('success');
            }
          } catch (reownError) {
            console.warn('Reown AppKit failed, falling back to Phantom:', reownError);
            // Fallback к Phantom если Reown не работает
            await handlePhantomPayment(fromPubkey, toPubkey, lamports, payStatus);
          }
        } else {
          // Fallback к Phantom
          await handlePhantomPayment(fromPubkey, toPubkey, lamports, payStatus);
        }
        
      } catch (e) {
        const payStatus = document.getElementById('pay-status');
        payStatus.classList.remove('loading');
        payStatus.classList.remove('success');
        payStatus.textContent = "Error: " + e.message;
        console.error("Payment error:", e);
        
        if (e.message.includes('insufficient funds')) {
          payStatus.textContent = "Insufficient SOL in wallet for demo payment";
        } else if (e.message.includes('User rejected')) {
          payStatus.textContent = "Transaction cancelled by user";
        }
      }
    };
  }
}

// Fallback функции для прямой работы с Phantom
async function handlePhantomPayment(fromPubkey, toPubkey, lamports, payStatus) {
  const rpcEndpoints = [
    'https://api.mainnet-beta.solana.com',
    'https://solana-api.projectserum.com',
    'https://rpc.ankr.com/solana',
    `https://mainnet.helius-rpc.com/?api-key=${HELIUS_API_KEY}`
  ];
  
  let connection = null;
  let lastError = null;
  
  // Пробуем разные RPC endpoints
  for (const endpoint of rpcEndpoints) {
    try {
      connection = new solanaWeb3.Connection(endpoint);
      const { blockhash } = await connection.getLatestBlockhash();
      
      const transaction = new solanaWeb3.Transaction().add(
        solanaWeb3.SystemProgram.transfer({
          fromPubkey: fromPubkey,
          toPubkey: toPubkey,
          lamports: lamports
        })
      );
      
      transaction.recentBlockhash = blockhash;
      transaction.feePayer = fromPubkey;
      
      const signedTransaction = await window.solana.signAndSendTransaction(transaction);
      
      if (signedTransaction && signedTransaction.signature) {
        payStatus.textContent = "Transaction sent! Checking status...";
        const confirmed = await checkTransactionStatus(signedTransaction.signature);
        
        payStatus.classList.remove('loading');
        
        if (confirmed) {
          payStatus.textContent = `Payment successful! Demo: ${lamports/1000000} SOL sent (represents ${amount.toLocaleString()} $READY)`;
          payStatus.classList.add('success');
        } else {
          payStatus.textContent = "Transaction timeout. Please check manually.";
        }
        return; // Успешно выполнено
      }
    } catch (error) {
      console.warn(`RPC endpoint ${endpoint} failed:`, error);
      lastError = error;
      continue; // Пробуем следующий endpoint
    }
  }
  
  // Если все endpoints не сработали
  throw new Error(`All RPC endpoints failed. Last error: ${lastError?.message || 'Unknown error'}`);
}

function setupFallbackConnection() {
  if (window.solana && window.solana.isPhantom) {
    window.solana.connect().then(resp => {
      userWallet = resp.publicKey.toString();
      document.getElementById('wallet-status').textContent = "Wallet: " + userWallet.substring(0, 8) + "...";
      document.getElementById('connect-btn').style.display = 'none';
      document.getElementById('disconnect-btn').style.display = 'block';
      updatePayButtonVisibility();
    }).catch(e => {
      alert("Wallet connection failed: " + e.message);
    });
  } else {
    alert("Please install Phantom Wallet!");
  }
}

function setupFallbackWalletButtons() {
  // Оригинальная логика для Phantom
  setupWalletButtons();
}

// Функция проверки статуса транзакции через Helius
async function checkTransactionStatus(signature) {
  const url = `https://api.helius.xyz/v0/transactions/${signature}?api-key=${HELIUS_API_KEY}`;
  
  for (let i = 0; i < 30; i++) {
    try {
      const resp = await fetch(url);
      const tx = await resp.json();
      
      if (tx && (tx.status === "Confirmed" || tx.status === "Finalized")) {
        return true;
      }
    } catch (e) {
      console.error("Error checking transaction:", e);
    }
    
    await new Promise(r => setTimeout(r, 2000));
  }
  
  return false;
}

// Simple Mobile Menu Toggle - Custom Implementation
function initCustomMobileMenu() {
  console.log('Initializing custom mobile menu...');
  
  // Найдем кнопку и меню
  const menuButton = document.querySelector('.elementor-menu-toggle');
  const navMenu = document.querySelector('.elementor-nav-menu--main');
  
  if (!menuButton || !navMenu) {
    console.warn('Menu elements not found');
    return;
  }
  
  console.log('Menu elements found, setting up...');
  
  // Удаляем все существующие event listeners (чистим конфликты)
  const newButton = menuButton.cloneNode(true);
  menuButton.parentNode.replaceChild(newButton, menuButton);
  
  // Инициализируем меню как скрытое на мобильных
  if (window.innerWidth <= 768) {
    navMenu.style.display = 'none';
    newButton.setAttribute('aria-expanded', 'false');
  }
  
  // Добавляем обработчик клика
  newButton.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Menu button clicked!');
    
    const isExpanded = newButton.getAttribute('aria-expanded') === 'true';
    
    if (isExpanded) {
      // Закрываем меню
      console.log('Closing menu...');
      navMenu.style.display = 'none';
      navMenu.classList.remove('custom-menu-open');
      newButton.setAttribute('aria-expanded', 'false');
    } else {
      // Открываем меню
      console.log('Opening menu...');
      navMenu.style.display = 'block';
      navMenu.classList.add('custom-menu-open');
      newButton.setAttribute('aria-expanded', 'true');
    }
  });
  
  // Закрываем меню при клике на ссылки
  const menuLinks = navMenu.querySelectorAll('.elementor-item');
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth <= 768) {
        navMenu.style.display = 'none';
        navMenu.classList.remove('custom-menu-open');
        newButton.setAttribute('aria-expanded', 'false');
      }
    });
  });
  
  // Управляем видимостью при изменении размера окна
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      // Десктоп - показываем меню всегда
      navMenu.style.display = '';
      navMenu.classList.remove('custom-menu-open');
      newButton.setAttribute('aria-expanded', 'false');
    } else {
      // Мобильный - скрываем если не активно
      if (!navMenu.classList.contains('custom-menu-open')) {
        navMenu.style.display = 'none';
      }
    }
  });
  
  console.log('Custom mobile menu initialized successfully!');
}

// Инициализируем после загрузки DOM
document.addEventListener('DOMContentLoaded', function() {
  updatePayButtonVisibility();
  
  // Инициализируем Reown AppKit
  if (typeof window.ReownAppKit !== 'undefined') {
    initializeReownAppKit();
  } else {
    // Fallback если Reown не загрузился
    console.warn('Reown AppKit not loaded, using fallback');
    setupFallbackWalletButtons();
  }
  
  setupWalletButtons();
  
  // Инициализируем наше кастомное мобильное меню
  setTimeout(() => {
    initCustomMobileMenu();
  }, 500); // Небольшая задержка чтобы избежать конфликтов
  
  setTimeout(setupWalletButtons, 100);

  // Mobile Menu Toggle
  const logoContainer = document.querySelector('.elementor-element-2089214');
  const menuButton = document.querySelector('.elementor-menu-toggle');
  
  if (logoContainer && menuButton) {
    logoContainer.addEventListener('click', function(e) {
      // Проверяем, что клик был по иконке (правая часть контейнера)
      const rect = logoContainer.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      
      if (clickX > rect.width - 40) { // 40px от правого края
        e.preventDefault();
        menuButton.click(); // Симулируем клик по оригинальной кнопке
      }
    });
  }
});

/*
     FILE ARCHIVED ON 16:40:46 Jun 20, 2024 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 14:29:11 May 21, 2025.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  captures_list: 0.801
  exclusion.robots: 0.035
  exclusion.robots.policy: 0.017
  esindex: 0.016
  cdx.remote: 90.719
  LoadShardBlock: 298.31 (3)
  PetaboxLoader3.datanode: 321.245 (4)
  load_resource: 120.947
  PetaboxLoader3.resolve: 60.198
*/
}