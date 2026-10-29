const K='bt29v4',esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;');
const CL={'Dễ':'l0','Trung bình':'l2','Khó':'l3'},PH={kt:'Kiểm tra',thi:'Thi'},ord=l=>['Dễ','Trung bình','Khó'].indexOf(l);
const T=a=>a.map(x=>x.split('|')),TPL='import java.util.*;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        // Viết lời giải ở đây\n    }\n}';
const SD=[['Tổng hai số','Dễ','Nhập a, b (cách nhau khoảng trắng). In ra a+b.',['1 2|3','5 5|10','0 0|0','-1 1|0','100 200|300']],
['Số lớn nhất của hai số','Dễ','Nhập a, b. In ra số lớn hơn.',['3 5|5','9 2|9','4 4|4','-1 -5|-1','0 7|7']],
['Bình phương','Dễ','Nhập n. In ra n*n.',['3|9','0|0','-4|16','10|100','7|49']],
['Số chẵn lẻ','Trung bình','Nhập n. In "Chan" nếu n chẵn, ngược lại in "Le".',['2|Chan','3|Le','0|Chan','7|Le','10|Chan']],
['Tổng từ 1 đến n','Trung bình','Nhập n. In ra 1+2+...+n.',['1|1','5|15','10|55','100|5050','3|6']],
['Giai thừa','Trung bình','Nhập n (0<=n<=10). In ra n!.',['0|1','1|1','5|120','3|6','10|3628800']],
['Số nguyên tố','Khó','Nhập n. In "YES" nếu n là số nguyên tố, ngược lại "NO".',['7|YES','8|NO','1|NO','13|YES','100|NO']],
['Fibonacci thứ n','Khó','Nhập n (F1=F2=1). In ra F(n).',['1|1','2|1','5|5','10|55','20|6765']],
['Số đối xứng','Khó','Nhập số nguyên dương n. In "YES" nếu n đọc xuôi ngược giống nhau, ngược lại "NO".',['121|YES','123|NO','7|YES','1221|YES','10|NO']]];
let DB=JSON.parse(localStorage[K]||'null')||{p:SD.map((x,i)=>({id:i+1,t:x[0],l:x[1],d:x[2],tests:T(x[3]),kt:1,thi:1})),de:{kt:SD.map((_,i)=>i+1),thi:SD.map((_,i)=>i+1)},subs:[]};
const save=()=>localStorage[K]=JSON.stringify(DB);let U=null,tab='',W=null;
const pl=ph=>DB.p.filter(p=>p[ph]).sort((a,b)=>ord(a.l)-ord(b.l)),tag=p=>`<span class="tag ${CL[p.l]}">${p.l}</span>`;
function menu(){$('menu').innerHTML=U?(U.role=='gv'?[['tao','📝 Tạo bài tập'],['cham','✅ Chấm điểm trực tiếp']]:[['kt','📋 Kiểm tra'],['thi','🎓 Thi']]).map(([k,v])=>`<button class="mb ${tab==k?'on':''}" onclick="go('${k}')">${v}</button>`).join('')+`<button class="mb" onclick="out()">Thoát (${U.role=='gv'?'Giáo viên':esc(U.n)})</button>`:''}
function go(k){tab=k;view()}
function view(){menu();$('app').innerHTML=!U?loginV():tab=='tao'?taoV():tab=='cham'?chamV():examV(tab)}
function loginV(){return`<div class="card"><h2>Đăng nhập (phân quyền)</h2><select id="r" onchange="rc()"><option value="sv">Sinh viên</option><option value="gv">Giáo viên</option></select>
<div id="fs"><input id="n" placeholder="Họ tên"><input id="m" placeholder="Mã SV"><select id="ph"><option value="kt">Chọn Phần: Kiểm tra</option><option value="thi">Chọn Phần: Thi</option></select></div>
<div id="fg" style="display:none"><input id="pw" type="password" placeholder="Mật khẩu giáo viên (gv123)"></div><button onclick="login()">Vào</button></div>`}
function rc(){const g=$('r').value=='gv';$('fs').style.display=g?'none':'block';$('fg').style.display=g?'block':'none'}
function login(){if($('r').value=='gv'){if($('pw').value!='gv123')return alert('Sai mật khẩu');U={role:'gv'};tab='tao'}else{const n=$('n').value.trim(),m=$('m').value.trim();if(!n||!m)return alert('Nhập Họ tên và Mã SV');U={role:'sv',n,m};tab=$('ph').value}W=null;view()}
function out(){U=null;W=null;view()}
// ---------- GIÁO VIÊN: Tạo bài tập ----------
function taoV(){return`<div class="card"><h2>Tạo bài tập (đề bài + bộ test)</h2><input id="pt" placeholder="Tên bài tập"><select id="pl"><option>Dễ</option><option>Trung bình</option><option>Khó</option></select><textarea id="pd" placeholder="Đề bài"></textarea>
<label><input type="checkbox" id="uk" checked style="width:auto"> Dùng cho Kiểm tra</label> &nbsp; <label><input type="checkbox" id="ut" checked style="width:auto"> Dùng cho Thi</label>
<h3>Bộ 5 test (mỗi test đúng = 2 điểm)</h3>${[0,1,2,3,4].map(i=>`<div class="tg"><textarea id="i${i}" placeholder="Test ${i+1}: Input"></textarea><textarea id="o${i}" placeholder="Test ${i+1}: Output mong đợi"></textarea></div>`).join('')}<button onclick="addP()">Lưu bài tập</button></div>
<div class="card"><h2>Danh sách bài tập (${DB.p.length})</h2><table><tr><th>Bài</th><th>Mức</th><th>Phần</th><th></th></tr>${DB.p.map(p=>`<tr><td>${esc(p.t)}</td><td>${tag(p)}</td><td>${p.kt?'Kiểm tra ':''}${p.thi?'Thi':''}</td><td><button onclick="delP(${p.id})">Xóa</button></td></tr>`).join('')}</table></div>`}
function addP(){const t=$('pt').value.trim(),tests=[0,1,2,3,4].map(i=>[$('i'+i).value,$('o'+i).value]);
if(!t||!$('pd').value.trim())return alert('Nhập tên và đề bài');if(tests.some(x=>!x[1].trim()))return alert('Cần đủ 5 test có output');if(!$('uk').checked&&!$('ut').checked)return alert('Chọn Kiểm tra và/hoặc Thi');
const id=Date.now();if($('uk').checked)DB.de.kt.push(id);if($('ut').checked)DB.de.thi.push(id);DB.p.push({id,t,l:$('pl').value,d:$('pd').value,tests,kt:$('uk').checked?1:0,thi:$('ut').checked?1:0});save();view()}
function delP(id){DB.p=DB.p.filter(p=>p.id!=id);DB.de.kt=DB.de.kt.filter(x=>x!=id);DB.de.thi=DB.de.thi.filter(x=>x!=id);save();view()}
// ---------- GIÁO VIÊN: Chấm điểm trực tiếp ----------
function pick(ph){return['Dễ','Trung bình','Khó'].map(l=>`<h3>Mức ${l}</h3>`+(pl(ph).filter(p=>p.l==l).map(p=>`<label class="row"><input type="checkbox" style="width:auto" ${DB.de[ph].includes(p.id)?'checked':''} onchange="tg('${ph}',${p.id})"> ${tag(p)} ${esc(p.t)}</label>`).join('')||'<i>Chưa có bài</i>')).join('')}
function tg(ph,id){DB.de[ph]=DB.de[ph].includes(id)?DB.de[ph].filter(x=>x!=id):[...DB.de[ph],id];save()}
function chamV(){return`<div class="card"><h2>Đề Kiểm tra (chọn bài giao cho SV)</h2>${pick('kt')}</div>
<div class="card"><h2>Đề Thi (chọn bài giao cho SV)</h2>${pick('thi')}</div>
<div class="card"><h2>Điểm trực tiếp</h2><button onclick="view()">🔄 Làm mới</button><table><tr><th>Họ tên</th><th>MSSV</th><th>Phần</th><th>Bài</th><th>Điểm</th><th>Lúc</th></tr>${[...DB.subs].reverse().map(s=>`<tr><td>${esc(s.n)}</td><td>${esc(s.m)}</td><td>${PH[s.ph]}</td><td>${esc(s.b)}</td><td><b>${s.sc}/10</b></td><td>${s.time}</td></tr>`).join('')}</table></div>
`}
// ---------- SINH VIÊN: Kiểm tra / Thi ----------
function examV(ph){const L=DB.de[ph].map(id=>DB.p.find(p=>p.id==id)).filter(Boolean),one=ph=='kt';
const info=`<div class="card">Sinh viên: <b>${esc(U.n)}</b> — Mã SV: <b>${esc(U.m)}</b> — Phần: <b>${PH[ph]}</b></div>`;
if(W&&W.ph==ph)return info+W.ids.map(id=>{const p=DB.p.find(x=>x.id==id);return`<div class="card"><h3>${tag(p)} ${esc(p.t)}</h3><p>${esc(p.d)}</p><textarea class="code" id="c${id}">${TPL}</textarea><div id="r${id}"></div></div>`}).join('')+'<button onclick="nop()">Nộp bài</button> <button onclick="W=null;view()">Chọn lại bài</button><div id="tot"></div>';
if(!L.length)return info+'<div class="card">Giáo viên chưa giao đề cho phần này.</div>';
return info+`<div class="card"><h2>Cửa sổ ${PH[ph]}</h2><p>${one?'Chọn <b>1</b> bài':'Chọn <b>2 đến 3</b> bài'} từ đề giáo viên đã giao (chia 3 mức Dễ, Trung bình, Khó):</p>`+['Dễ','Trung bình','Khó'].map(l=>`<h3>Mức ${l}</h3>`+(L.filter(p=>p.l==l).map(p=>`<label class="row"><input type="${one?'radio':'checkbox'}" name="pick" style="width:auto" value="${p.id}"> ${tag(p)} ${esc(p.t)}</label>`).join('')||'<i>Chưa có bài</i>')).join('')+`<button onclick="begin('${ph}')">Bắt đầu làm bài</button></div>`}
function begin(ph){const ids=[...document.querySelectorAll('input[name=pick]:checked')].map(x=>+x.value);if(ph=='kt'&&ids.length!=1)return alert('Kiểm tra: chọn đúng 1 bài');if(ph=='thi'&&(ids.length<2||ids.length>3))return alert('Thi: chọn 2 đến 3 bài');W={ph,ids};view()}
async function nop(){const{ph,ids}=W;$('tot').innerHTML='⏳ Đang chấm...';let sum=0;
try{for(const id of ids){const p=DB.p.find(x=>x.id==id),r=await grade(p,$('c'+id).value),sc=r.filter(x=>x.ok).length*2;sum+=sc;$('r'+id).innerHTML=showRes(r)+`<b>Điểm bài: ${sc}/10</b>`;
DB.subs=DB.subs.filter(s=>!(s.m==U.m&&s.ph==ph&&s.id==id));DB.subs.push({n:U.n,m:U.m,ph,id,b:p.t,sc,time:new Date().toLocaleString('vi-VN')})}
save();$('tot').innerHTML=`<h2>Tổng điểm ${PH[ph]}: ${(sum/ids.length).toFixed(1)}/10</h2>`}catch(e){$('tot').innerHTML=`<span class="bad">${e.message}</span>`}}
// ---------- Máy chấm ----------
const norm=s=>s.split('\n').map(x=>x.trimEnd()).join('\n').trim();
async function run(code,inp){let r;try{r=await fetch('https://ce.judge0.com/submissions?base64_encoded=false&wait=true',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({source_code:code,language_id:62,stdin:inp})})}catch(e){throw Error('Không kết nối được máy chấm (cần Internet).')}
if(!r.ok)throw Error('Máy chấm trả lỗi '+r.status);const j=await r.json();return(j.stdout||j.compile_output||j.stderr||j.message||'').trim()}
async function grade(p,code){const r=[];for(const[i,o]of p.tests){if(!code.trim()){r.push({ok:0,got:'(chưa có code)',o});continue}const got=await run(code,i);r.push({ok:norm(got)==norm(o),got,o})}return r}
const showRes=(r,v)=>r.map((x,k)=>`<div class="${x.ok?'ok':'bad'}">Test ${k+1}: ${x.ok?'✔ Đúng (+2)':'✘ Sai'}${v&&!x.ok?` — mong đợi «${esc(x.o)}», nhận «${esc(x.got)}»`:''}</div>`).join('');
