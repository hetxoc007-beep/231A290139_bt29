const LV=['Dễ','Trung bình','Khá','Khó'];
const CH=[
{t:'Chương 1: Java cơ bản',th:`
<h3>1.1 Giới thiệu về Java</h3>
<p>Java là ngôn ngữ lập trình <b>hướng đối tượng</b>, đa nền tảng, do Sun Microsystems (nay là Oracle) phát triển năm 1995. Khẩu hiệu nổi tiếng của Java là <i>"Viết một lần, chạy mọi nơi"</i> (Write Once, Run Anywhere).</p>
<ul>
<li><b>JDK</b> (Java Development Kit): bộ công cụ cho lập trình viên, gồm trình biên dịch <code>javac</code>, trình chạy <code>java</code>, thư viện chuẩn.</li>
<li><b>JRE</b> (Java Runtime Environment): môi trường để chạy chương trình Java.</li>
<li><b>JVM</b> (Java Virtual Machine): máy ảo thực thi <i>bytecode</i> (file <code>.class</code>) trên mọi hệ điều hành.</li>
</ul>
<p><b>Quy trình chạy chương trình:</b> viết mã nguồn <code>Main.java</code> → biên dịch <code>javac Main.java</code> ra <code>Main.class</code> → chạy <code>java Main</code>.</p>

<h3>1.2 Cấu trúc một chương trình Java</h3>
<pre>public class Main {
    public static void main(String[] args) {
        System.out.println("Hello Java");
    }
}</pre>
<ul>
<li>Tên lớp public phải trùng tên file (<code>Main.java</code>).</li>
<li><code>main</code> là điểm bắt đầu của chương trình.</li>
<li>Mỗi câu lệnh kết thúc bằng dấu <code>;</code>. Khối lệnh đặt trong <code>{ }</code>.</li>
<li>Chú thích: <code>// một dòng</code> và <code>/* nhiều dòng */</code>.</li>
<li>Java <b>phân biệt chữ hoa, chữ thường</b> (<code>Main</code> khác <code>main</code>).</li>
</ul>

<h3>1.3 Biến và kiểu dữ liệu</h3>
<p>Biến là vùng nhớ có tên dùng để lưu giá trị. Cú pháp: <code>kiểu tên = giá_trị;</code></p>
<table>
<tr><th>Kiểu</th><th>Kích thước</th><th>Ý nghĩa</th><th>Ví dụ</th></tr>
<tr><td>byte</td><td>1 byte</td><td>Số nguyên nhỏ (-128..127)</td><td>byte b = 10;</td></tr>
<tr><td>int</td><td>4 byte</td><td>Số nguyên (~ ±2,1 tỷ)</td><td>int a = 100;</td></tr>
<tr><td>long</td><td>8 byte</td><td>Số nguyên lớn</td><td>long x = 10000000000L;</td></tr>
<tr><td>float</td><td>4 byte</td><td>Số thực độ chính xác đơn</td><td>float f = 3.14f;</td></tr>
<tr><td>double</td><td>8 byte</td><td>Số thực độ chính xác kép</td><td>double d = 3.14159;</td></tr>
<tr><td>char</td><td>2 byte</td><td>Một ký tự</td><td>char c = 'A';</td></tr>
<tr><td>boolean</td><td>1 bit</td><td>true / false</td><td>boolean ok = true;</td></tr>
<tr><td>String</td><td>-</td><td>Chuỗi ký tự (kiểu tham chiếu)</td><td>String s = "Java";</td></tr>
</table>
<div class="note"><b>Quy tắc đặt tên:</b> bắt đầu bằng chữ cái, <code>_</code> hoặc <code>$</code>; không trùng từ khóa; nên theo camelCase (<code>tongDiem</code>). Hằng số khai báo bằng <code>final</code>, ví dụ <code>final double PI = 3.14;</code></div>

<h3>1.4 Toán tử</h3>
<ul>
<li><b>Số học:</b> <code>+ - * / %</code>. Lưu ý <code>7 / 2 = 3</code> (chia nguyên), <code>7 % 2 = 1</code>, <code>7 / 2.0 = 3.5</code>.</li>
<li><b>Gán:</b> <code>= += -= *= /= %=</code>; tăng giảm: <code>i++</code>, <code>i--</code>.</li>
<li><b>So sánh:</b> <code>== != &lt; &gt; &lt;= &gt;=</code> (kết quả boolean).</li>
<li><b>Logic:</b> <code>&amp;&amp;</code> (và), <code>||</code> (hoặc), <code>!</code> (phủ định).</li>
</ul>

<h3>1.5 Ép kiểu</h3>
<pre>int a = 5;
double d = a;          // ép kiểu ngầm định (nhỏ -> lớn)
double x = 9.7;
int n = (int) x;       // ép kiểu tường minh, n = 9 (mất phần thập phân)
int so = Integer.parseInt("123");   // chuỗi -> số
String s = String.valueOf(45);      // số -> chuỗi</pre>

<h3>1.6 Nhập xuất dữ liệu</h3>
<pre>import java.util.*;

public class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int a = sc.nextInt();
        double b = sc.nextDouble();
        sc.nextLine();                 // bỏ ký tự xuống dòng còn sót
        String ten = sc.nextLine();    // đọc cả dòng
        System.out.println("Xin chao " + ten);
        System.out.printf("%d + %.2f = %.2f%n", a, b, a + b);
    }
}</pre>
<ul>
<li><code>println</code>: in rồi xuống dòng; <code>print</code>: in không xuống dòng; <code>printf</code>: in theo định dạng (<code>%d</code> số nguyên, <code>%f</code> số thực, <code>%s</code> chuỗi).</li>
</ul>

<h3>1.7 Lỗi thường gặp</h3>
<ul>
<li>Quên dấu <code>;</code> hoặc không cân đối dấu ngoặc <code>{ }</code>.</li>
<li>Chia hai số nguyên rồi gán cho double vẫn mất phần thập phân: <code>double r = 1 / 2;</code> cho 0.0.</li>
<li>Dùng <code>nextLine()</code> ngay sau <code>nextInt()</code> khiến đọc phải dòng rỗng.</li>
<li>Dùng biến chưa khởi tạo giá trị.</li>
</ul>
<div class="note"><b>Tóm tắt:</b> Java chạy trên JVM; chương trình bắt đầu từ <code>main</code>; có 8 kiểu nguyên thủy và String; dùng Scanner để nhập, System.out để xuất.</div>`,
ex:[['Dễ','In ra "Hello Java".','System.out.println("Hello Java");'],['Trung bình','Nhập a, b in tổng và tích.','Scanner sc=new Scanner(System.in);int a=sc.nextInt(),b=sc.nextInt();\nSystem.out.println((a+b)+" "+(a*b));'],['Khá','Đổi độ C sang F.','double c=sc.nextDouble();System.out.println(c*9/5+32);'],['Khó','Tách chữ số của số nguyên n, in tổng.','int n=sc.nextInt(),s=0;while(n>0){s+=n%10;n/=10;}System.out.println(s);']]},

{t:'Chương 2: Cấu trúc điều khiển',th:`
<h3>2.1 Câu lệnh rẽ nhánh if / else</h3>
<pre>int diem = 8;
if (diem >= 9) {
    System.out.println("Xuat sac");
} else if (diem >= 7) {
    System.out.println("Gioi");
} else if (diem >= 5) {
    System.out.println("Trung binh");
} else {
    System.out.println("Yeu");
}</pre>
<p>Điều kiện trong <code>if</code> bắt buộc là kiểu <code>boolean</code>. Có thể kết hợp nhiều điều kiện bằng <code>&amp;&amp;</code>, <code>||</code>, <code>!</code>.</p>
<p><b>Toán tử ba ngôi:</b> <code>điều_kiện ? giá_trị_đúng : giá_trị_sai</code>, ví dụ <code>String kq = n % 2 == 0 ? "Chan" : "Le";</code></p>

<h3>2.2 Câu lệnh switch</h3>
<pre>int thu = 3;
switch (thu) {
    case 2: System.out.println("Thu hai"); break;
    case 3: System.out.println("Thu ba"); break;
    case 7: case 8: System.out.println("Cuoi tuan"); break;
    default: System.out.println("Khong hop le");
}</pre>
<div class="note"><b>Lưu ý:</b> thiếu <code>break</code> chương trình sẽ chạy tiếp xuống case kế tiếp (hiện tượng "fall-through"). switch hỗ trợ int, char, String, enum.</div>

<h3>2.3 Vòng lặp for</h3>
<p>Dùng khi biết trước số lần lặp. Cú pháp: <code>for (khởi_tạo; điều_kiện; bước_nhảy)</code></p>
<pre>for (int i = 1; i <= 5; i++) {
    System.out.print(i + " ");     // 1 2 3 4 5
}</pre>

<h3>2.4 Vòng lặp while và do-while</h3>
<pre>int n = 12345, tong = 0;
while (n > 0) {          // kiểm tra điều kiện trước
    tong += n % 10;
    n /= 10;
}
System.out.println(tong);   // 15

int k;
do {                       // chạy ít nhất 1 lần
    k = sc.nextInt();
} while (k <= 0);          // nhập lại đến khi k > 0</pre>
<table>
<tr><th>Vòng lặp</th><th>Khi nào dùng</th><th>Kiểm tra điều kiện</th></tr>
<tr><td>for</td><td>Biết số lần lặp</td><td>Trước mỗi lần lặp</td></tr>
<tr><td>while</td><td>Chưa biết số lần lặp</td><td>Trước mỗi lần lặp</td></tr>
<tr><td>do-while</td><td>Cần chạy ít nhất 1 lần (vd: nhập dữ liệu)</td><td>Sau mỗi lần lặp</td></tr>
</table>

<h3>2.5 break và continue</h3>
<ul>
<li><code>break</code>: thoát hẳn khỏi vòng lặp (hoặc switch) hiện tại.</li>
<li><code>continue</code>: bỏ qua phần còn lại của lần lặp hiện tại, sang lần lặp tiếp theo.</li>
</ul>
<pre>for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) continue;   // bỏ qua số chẵn
    if (i > 7) break;           // dừng khi i > 7
    System.out.print(i + " ");  // 1 3 5 7
}</pre>

<h3>2.6 Vòng lặp lồng nhau</h3>
<p>Một vòng lặp đặt bên trong vòng lặp khác, thường dùng để in hình hoặc xử lý ma trận.</p>
<pre>for (int i = 1; i <= 4; i++) {
    for (int j = 1; j <= i; j++) {
        System.out.print("* ");
    }
    System.out.println();
}
// *
// * *
// * * *
// * * * *</pre>

<h3>2.7 Một số bài toán kinh điển</h3>
<ul>
<li><b>Kiểm tra số nguyên tố:</b> chỉ cần xét ước từ 2 đến √n.</li>
<li><b>Ước chung lớn nhất (Euclid):</b> <code>while (b != 0) { int r = a % b; a = b; b = r; }</code> kết quả là a.</li>
<li><b>Đếm / tính tổng các số thỏa điều kiện</b> trong khoảng 1..n.</li>
</ul>

<h3>2.8 Lỗi thường gặp</h3>
<ul>
<li>Viết <code>if (a = 5)</code> thay vì <code>if (a == 5)</code> (lỗi biên dịch trong Java).</li>
<li>Vòng lặp vô hạn do quên cập nhật biến điều khiển.</li>
<li>Lệch một đơn vị (off-by-one): nhầm <code>&lt;</code> và <code>&lt;=</code>.</li>
<li>Đặt dấu <code>;</code> sau <code>for(...)</code> hoặc <code>if(...)</code> làm khối lệnh không chạy như ý.</li>
</ul>
<div class="note"><b>Tóm tắt:</b> if/else và switch để rẽ nhánh; for/while/do-while để lặp; break/continue điều khiển luồng; vòng lặp lồng nhau dùng cho bài toán hai chiều.</div>`,
ex:[['Dễ','Kiểm tra số chẵn/lẻ.','System.out.println(n%2==0?"Chan":"Le");'],['Trung bình','Tính tổng 1..n.','int s=0;for(int i=1;i<=n;i++)s+=i;'],['Khá','Kiểm tra số nguyên tố.','boolean p=n>1;for(int i=2;i*i<=n;i++)if(n%i==0)p=false;'],['Khó','In n số Fibonacci đầu tiên.','long a=0,b=1;for(int i=0;i<n;i++){System.out.print(a+" ");long t=a+b;a=b;b=t;}']]},

{t:'Chương 3: Mảng và Chuỗi',th:`
<h3>3.1 Mảng một chiều</h3>
<p>Mảng là tập hợp các phần tử <b>cùng kiểu</b>, kích thước cố định, truy cập bằng chỉ số bắt đầu từ <b>0</b>.</p>
<pre>int[] a = new int[5];            // 5 phần tử, mặc định 0
int[] b = {4, 8, 1, 9, 3};       // khai báo kèm giá trị
a[0] = 10;
System.out.println(b.length);    // 5 (length là thuộc tính, không có ngoặc)
System.out.println(b[4]);        // 3 (phần tử cuối là b[length-1])</pre>
<div class="note">Truy cập chỉ số ngoài khoảng <code>0..length-1</code> sẽ ném <code>ArrayIndexOutOfBoundsException</code>.</div>

<h3>3.2 Duyệt mảng</h3>
<pre>for (int i = 0; i < b.length; i++) System.out.print(b[i] + " ");
for (int x : b) System.out.print(x + " ");     // for-each: chỉ đọc giá trị

// Tìm max và tính tổng
int max = b[0], tong = 0;
for (int x : b) { tong += x; if (x > max) max = x; }</pre>

<h3>3.3 Lớp tiện ích Arrays</h3>
<table>
<tr><th>Phương thức</th><th>Công dụng</th></tr>
<tr><td>Arrays.sort(a)</td><td>Sắp xếp tăng dần</td></tr>
<tr><td>Arrays.toString(a)</td><td>Chuyển mảng thành chuỗi để in</td></tr>
<tr><td>Arrays.fill(a, v)</td><td>Gán mọi phần tử bằng v</td></tr>
<tr><td>Arrays.copyOf(a, n)</td><td>Sao chép sang mảng mới độ dài n</td></tr>
<tr><td>Arrays.binarySearch(a, k)</td><td>Tìm kiếm nhị phân (mảng đã sắp xếp)</td></tr>
<tr><td>Arrays.equals(a, b)</td><td>So sánh nội dung hai mảng</td></tr>
</table>
<p>Cần <code>import java.util.*;</code> để dùng <code>Arrays</code> và <code>Scanner</code>.</p>

<h3>3.4 Mảng hai chiều</h3>
<pre>int[][] m = {
    {1, 2, 3},
    {4, 5, 6}
};                                   // 2 hàng, 3 cột
for (int i = 0; i < m.length; i++) {
    for (int j = 0; j < m[i].length; j++) {
        System.out.print(m[i][j] + " ");
    }
    System.out.println();
}</pre>

<h3>3.5 Chuỗi String</h3>
<p><code>String</code> là đối tượng <b>bất biến</b> (immutable): mọi thao tác "sửa" đều tạo ra chuỗi mới.</p>
<table>
<tr><th>Phương thức</th><th>Ý nghĩa</th><th>Ví dụ (s = "Hello Java")</th></tr>
<tr><td>length()</td><td>Độ dài chuỗi</td><td>10</td></tr>
<tr><td>charAt(i)</td><td>Ký tự tại vị trí i</td><td>s.charAt(1) → 'e'</td></tr>
<tr><td>substring(a, b)</td><td>Chuỗi con [a, b)</td><td>s.substring(0,5) → "Hello"</td></tr>
<tr><td>indexOf(x)</td><td>Vị trí xuất hiện đầu tiên (-1 nếu không có)</td><td>s.indexOf("Java") → 6</td></tr>
<tr><td>toUpperCase() / toLowerCase()</td><td>Đổi hoa / thường</td><td>"HELLO JAVA"</td></tr>
<tr><td>trim()</td><td>Xóa khoảng trắng đầu và cuối</td><td>" a ".trim() → "a"</td></tr>
<tr><td>replace(x, y)</td><td>Thay thế</td><td>s.replace("l","L")</td></tr>
<tr><td>split(" ")</td><td>Tách thành mảng chuỗi</td><td>["Hello","Java"]</td></tr>
<tr><td>equals(t) / equalsIgnoreCase(t)</td><td>So sánh nội dung</td><td>s.equals("Hello Java") → true</td></tr>
<tr><td>contains(x), startsWith(x), endsWith(x)</td><td>Kiểm tra chứa / bắt đầu / kết thúc</td><td>s.contains("Java") → true</td></tr>
</table>
<div class="note"><b>Quan trọng:</b> so sánh nội dung chuỗi bằng <code>equals()</code>, <b>không</b> dùng <code>==</code> (vì <code>==</code> so sánh địa chỉ tham chiếu).</div>

<h3>3.6 StringBuilder</h3>
<p>Khi nối chuỗi nhiều lần trong vòng lặp, dùng <code>StringBuilder</code> để tránh tạo quá nhiều đối tượng trung gian.</p>
<pre>StringBuilder sb = new StringBuilder();
for (int i = 1; i <= 5; i++) sb.append(i).append(",");
sb.reverse();                    // đảo ngược
sb.insert(0, "[");               // chèn
System.out.println(sb.toString());</pre>

<h3>3.7 Ví dụ: đếm nguyên âm và đảo từ</h3>
<pre>String s = "Lap trinh Java";
int dem = 0;
for (char c : s.toLowerCase().toCharArray()) {
    if ("aeiou".indexOf(c) >= 0) dem++;
}
String[] tu = s.split(" ");
for (int i = tu.length - 1; i >= 0; i--) System.out.print(tu[i] + " ");</pre>

<h3>3.8 Lỗi thường gặp</h3>
<ul>
<li>Vượt chỉ số mảng (dùng <code>i &lt;= a.length</code> thay vì <code>i &lt; a.length</code>).</li>
<li>Dùng <code>==</code> để so sánh chuỗi.</li>
<li>Quên rằng <code>s.toUpperCase()</code> trả về chuỗi mới, không thay đổi s.</li>
<li>Gán <code>int[] b = a;</code> chỉ sao chép tham chiếu, hai biến cùng trỏ một mảng.</li>
</ul>
<div class="note"><b>Tóm tắt:</b> mảng cố định kích thước, chỉ số từ 0; Arrays hỗ trợ sắp xếp/tìm kiếm; String bất biến, so sánh bằng equals; dùng StringBuilder khi nối nhiều.</div>`,
ex:[['Dễ','Tìm max của mảng.','int m=a[0];for(int x:a)m=Math.max(m,x);'],['Trung bình','Đảo ngược chuỗi.','new StringBuilder(s).reverse().toString()'],['Khá','Sắp xếp mảng tăng dần.','Arrays.sort(a);'],['Khó','Kiểm tra chuỗi đối xứng (bỏ khoảng trắng).','String t=s.replace(" ","");boolean ok=t.equals(new StringBuilder(t).reverse().toString());']]},

{t:'Chương 4: Lập trình hướng đối tượng',th:`
<h3>4.1 Lớp và đối tượng</h3>
<p><b>Lớp</b> (class) là khuôn mẫu mô tả thuộc tính (dữ liệu) và phương thức (hành vi). <b>Đối tượng</b> (object) là thể hiện cụ thể của lớp, tạo bằng từ khóa <code>new</code>.</p>
<pre>class SinhVien {
    String ten;
    int tuoi;

    void gioiThieu() {
        System.out.println("Toi la " + ten + ", " + tuoi + " tuoi");
    }
}

SinhVien sv = new SinhVien();
sv.ten = "An"; sv.tuoi = 20;
sv.gioiThieu();</pre>

<h3>4.2 Constructor và từ khóa this</h3>
<p>Constructor là phương thức đặc biệt cùng tên lớp, không có kiểu trả về, tự chạy khi tạo đối tượng. <code>this</code> tham chiếu đến chính đối tượng hiện tại.</p>
<pre>class SinhVien {
    private String ten;
    private int tuoi;

    SinhVien() { this("Chua co ten", 18); }       // constructor mặc định
    SinhVien(String ten, int tuoi) {              // constructor có tham số
        this.ten = ten;
        this.tuoi = tuoi;
    }
}</pre>

<h3>4.3 Bốn tính chất của OOP</h3>
<h3 style="font-size:16px">a) Đóng gói (Encapsulation)</h3>
<p>Ẩn dữ liệu bằng <code>private</code>, chỉ cho truy cập qua getter/setter để kiểm soát dữ liệu hợp lệ.</p>
<pre>public int getTuoi() { return tuoi; }
public void setTuoi(int tuoi) {
    if (tuoi > 0) this.tuoi = tuoi;     // kiểm tra hợp lệ
}</pre>
<table>
<tr><th>Phạm vi truy cập</th><th>Cùng lớp</th><th>Cùng package</th><th>Lớp con</th><th>Mọi nơi</th></tr>
<tr><td>private</td><td>✔</td><td>✘</td><td>✘</td><td>✘</td></tr>
<tr><td>(mặc định)</td><td>✔</td><td>✔</td><td>✘</td><td>✘</td></tr>
<tr><td>protected</td><td>✔</td><td>✔</td><td>✔</td><td>✘</td></tr>
<tr><td>public</td><td>✔</td><td>✔</td><td>✔</td><td>✔</td></tr>
</table>

<h3 style="font-size:16px">b) Kế thừa (Inheritance)</h3>
<p>Lớp con dùng <code>extends</code> để thừa hưởng thuộc tính và phương thức của lớp cha; dùng <code>super</code> để gọi lớp cha. Java chỉ cho phép đơn kế thừa lớp.</p>
<pre>class DongVat {
    String ten;
    DongVat(String ten) { this.ten = ten; }
    void keu() { System.out.println("..."); }
}
class Cho extends DongVat {
    Cho(String ten) { super(ten); }
    @Override
    void keu() { System.out.println(ten + ": Gau gau"); }
}</pre>

<h3 style="font-size:16px">c) Đa hình (Polymorphism)</h3>
<ul>
<li><b>Overload</b> (nạp chồng): cùng tên phương thức, khác tham số, trong cùng một lớp.</li>
<li><b>Override</b> (ghi đè): lớp con định nghĩa lại phương thức của lớp cha; phương thức nào chạy được quyết định lúc thực thi.</li>
</ul>
<pre>DongVat d = new Cho("Lu");   // biến kiểu cha, đối tượng kiểu con
d.keu();                     // gọi keu() của Cho: "Lu: Gau gau"</pre>

<h3 style="font-size:16px">d) Trừu tượng (Abstraction)</h3>
<pre>abstract class Hinh {
    abstract double dienTich();          // không có thân phương thức
}
interface BayDuoc { void bay(); }        // chỉ khai báo hành vi
class Chim extends DongVat implements BayDuoc {
    Chim(String t) { super(t); }
    public void bay() { System.out.println("Dang bay"); }
}</pre>
<table>
<tr><th></th><th>abstract class</th><th>interface</th></tr>
<tr><td>Kế thừa</td><td>extends (1 lớp)</td><td>implements (nhiều interface)</td></tr>
<tr><td>Có thuộc tính / constructor</td><td>Có</td><td>Không (chỉ hằng số)</td></tr>
<tr><td>Mục đích</td><td>Chia sẻ mã chung + ép lớp con cài đặt</td><td>Định nghĩa "hợp đồng" hành vi</td></tr>
</table>

<h3>4.4 Thành viên static và phương thức toString</h3>
<pre>class SinhVien {
    static int soLuong = 0;              // dùng chung cho mọi đối tượng
    SinhVien() { soLuong++; }
    static int dem() { return soLuong; }  // gọi: SinhVien.dem()

    @Override
    public String toString() { return ten + " - " + tuoi; }
}</pre>

<h3>4.5 Ví dụ tổng hợp: tính tổng diện tích các hình</h3>
<pre>abstract class Hinh { abstract double dt(); }
class HinhTron extends Hinh {
    double r; HinhTron(double r) { this.r = r; }
    double dt() { return Math.PI * r * r; }
}
class HinhChuNhat extends Hinh {
    double a, b; HinhChuNhat(double a, double b) { this.a = a; this.b = b; }
    double dt() { return a * b; }
}
// Dùng:
ArrayList&lt;Hinh&gt; ds = new ArrayList&lt;&gt;();
ds.add(new HinhTron(1)); ds.add(new HinhChuNhat(2, 3));
double tong = 0;
for (Hinh h : ds) tong += h.dt();      // đa hình: tự gọi đúng dt()</pre>

<h3>4.6 Lỗi thường gặp</h3>
<ul>
<li>Quên gọi <code>super(...)</code> khi lớp cha không có constructor mặc định.</li>
<li>Khai báo <code>@Override</code> nhưng sai chữ ký phương thức nên không ghi đè được.</li>
<li>Gọi phương thức không static từ <code>main</code> mà không tạo đối tượng.</li>
<li>Khởi tạo trực tiếp lớp abstract hoặc interface bằng <code>new</code>.</li>
</ul>
<div class="note"><b>Tóm tắt:</b> lớp là khuôn mẫu, đối tượng là thể hiện; đóng gói bảo vệ dữ liệu; kế thừa tái sử dụng mã; đa hình cho phép một lời gọi hành xử khác nhau; trừu tượng định nghĩa khung chung.</div>`,
ex:[['Dễ','Lớp SinhVien có name, id và phương thức in.','class SV{String name;int id;void in(){System.out.println(name+" "+id);}}'],['Trung bình','Thêm constructor và getter/setter.','SV(String n,int i){name=n;id=i;} String getName(){return name;}'],['Khá','Lớp Hinh trừu tượng, HinhTron kế thừa tính diện tích.','abstract class Hinh{abstract double dt();}\nclass HT extends Hinh{double r;double dt(){return Math.PI*r*r;}}'],['Khó','Dùng ArrayList<Hinh>, tính tổng diện tích bằng đa hình.','double s=0;for(Hinh h:ds)s+=h.dt();']]},

{t:'Chương 5: Xử lý ngoại lệ',th:`
<h3>5.1 Ngoại lệ là gì?</h3>
<p>Ngoại lệ (Exception) là sự kiện bất thường xảy ra khi chương trình đang chạy (chia cho 0, truy cập sai chỉ số, nhập sai định dạng, file không tồn tại...). Nếu không xử lý, chương trình sẽ dừng đột ngột.</p>
<pre>int a = 10, b = 0;
System.out.println(a / b);   // ArithmeticException: / by zero</pre>

<h3>5.2 Phân cấp ngoại lệ</h3>
<ul>
<li><b>Throwable</b> → gồm <b>Error</b> (lỗi nghiêm trọng của hệ thống, ví dụ OutOfMemoryError, không nên bắt) và <b>Exception</b>.</li>
<li><b>Checked exception</b>: trình biên dịch bắt buộc xử lý (vd: <code>IOException</code>, <code>FileNotFoundException</code>).</li>
<li><b>Unchecked exception</b> (kế thừa RuntimeException): không bắt buộc xử lý (vd: <code>ArithmeticException</code>, <code>NullPointerException</code>, <code>ArrayIndexOutOfBoundsException</code>, <code>NumberFormatException</code>).</li>
</ul>

<h3>5.3 try - catch - finally</h3>
<pre>try {
    int n = Integer.parseInt("abc");
    System.out.println(10 / n);
} catch (NumberFormatException e) {
    System.out.println("Khong phai so: " + e.getMessage());
} catch (ArithmeticException e) {
    System.out.println("Chia cho 0");
} catch (Exception e) {                 // bắt mọi ngoại lệ còn lại (đặt cuối)
    System.out.println("Loi: " + e);
} finally {
    System.out.println("Luon chay du co loi hay khong");
}</pre>
<ul>
<li>Khối <code>try</code>: chứa đoạn mã có thể phát sinh lỗi.</li>
<li>Khối <code>catch</code>: xử lý khi lỗi xảy ra; nhiều catch thì ngoại lệ <b>cụ thể đặt trước</b>, tổng quát đặt sau.</li>
<li>Khối <code>finally</code>: luôn thực thi, thường dùng để giải phóng tài nguyên.</li>
</ul>

<h3>5.4 throw và throws</h3>
<ul>
<li><code>throw</code>: chủ động ném một ngoại lệ.</li>
<li><code>throws</code>: khai báo ở phương thức rằng nó có thể ném ngoại lệ để nơi gọi xử lý.</li>
</ul>
<pre>static void setDiem(double d) {
    if (d < 0 || d > 10)
        throw new IllegalArgumentException("Diem phai tu 0 den 10");
    System.out.println("Diem hop le: " + d);
}

static void docFile() throws java.io.IOException {
    // ... mã có thể ném IOException
}</pre>

<h3>5.5 Tự định nghĩa ngoại lệ</h3>
<pre>class TuoiKhongHopLeException extends Exception {
    public TuoiKhongHopLeException(String msg) { super(msg); }
}

static void kiemTra(int tuoi) throws TuoiKhongHopLeException {
    if (tuoi < 0) throw new TuoiKhongHopLeException("Tuoi am: " + tuoi);
}</pre>

<h3>5.6 try-with-resources</h3>
<p>Tự động đóng tài nguyên (đối tượng implements <code>AutoCloseable</code>) khi kết thúc khối try, không cần viết finally.</p>
<pre>try (Scanner sc = new Scanner(System.in)) {
    int n = sc.nextInt();
    System.out.println(n * 2);
}   // sc tự động được đóng</pre>

<h3>5.7 Ví dụ: nhập số an toàn</h3>
<pre>Scanner sc = new Scanner(System.in);
int n;
while (true) {
    try {
        n = Integer.parseInt(sc.nextLine().trim());
        break;                           // nhập đúng thì thoát vòng lặp
    } catch (NumberFormatException e) {
        System.out.println("Nhap lai, phai la so nguyen!");
    }
}</pre>

<h3>5.8 Lỗi thường gặp</h3>
<ul>
<li>Bắt <code>Exception</code> chung chung rồi bỏ trống khối catch (nuốt lỗi, khó gỡ rối).</li>
<li>Đặt catch tổng quát trước catch cụ thể gây lỗi biên dịch.</li>
<li>Nhầm <code>throw</code> (ném một ngoại lệ) với <code>throws</code> (khai báo).</li>
<li>Dùng ngoại lệ để điều khiển luồng thông thường thay vì kiểm tra điều kiện.</li>
</ul>
<div class="note"><b>Tóm tắt:</b> dùng try/catch để bắt lỗi, finally để dọn dẹp, throw để ném, throws để khai báo; có thể tự tạo ngoại lệ bằng cách kế thừa Exception.</div>`,
ex:[['Dễ','Nhập a, b. Nếu b = 0 in "Loi chia 0", ngược lại in a/b (số nguyên).','try{System.out.println(a/b);}catch(ArithmeticException e){System.out.println("Loi chia 0");}'],['Trung bình','Đọc một chuỗi, chuyển sang số nguyên; nếu sai định dạng in "Khong hop le".','try{int n=Integer.parseInt(s);System.out.println(n);}catch(NumberFormatException e){System.out.println("Khong hop le");}'],['Khá','Viết phương thức kiemTraTuoi(int t) ném IllegalArgumentException nếu t<0 hoặc t>150; bắt và in thông báo.','static void kiemTraTuoi(int t){if(t<0||t>150)throw new IllegalArgumentException("Tuoi khong hop le");}\ntry{kiemTraTuoi(t);System.out.println("OK");}catch(IllegalArgumentException e){System.out.println(e.getMessage());}'],['Khó','Tạo ngoại lệ SoAmException (extends Exception); phương thức canBac2(double x) ném ngoại lệ nếu x<0.','class SoAmException extends Exception{SoAmException(String m){super(m);}}\nstatic double canBac2(double x)throws SoAmException{if(x<0)throw new SoAmException("So am");return Math.sqrt(x);}']]},

{t:'Chương 6: Collections và Generics',th:`
<h3>6.1 Collections Framework</h3>
<p>Mảng có kích thước cố định. Java cung cấp <b>Collections Framework</b> (gói <code>java.util</code>) gồm các cấu trúc dữ liệu có thể thay đổi kích thước linh hoạt.</p>
<table>
<tr><th>Giao diện</th><th>Cài đặt phổ biến</th><th>Đặc điểm</th></tr>
<tr><td>List</td><td>ArrayList, LinkedList</td><td>Có thứ tự, cho phép trùng, truy cập theo chỉ số</td></tr>
<tr><td>Set</td><td>HashSet, TreeSet</td><td>Không chứa phần tử trùng (TreeSet tự sắp xếp)</td></tr>
<tr><td>Map</td><td>HashMap, TreeMap</td><td>Lưu cặp khóa - giá trị, khóa không trùng</td></tr>
<tr><td>Queue</td><td>LinkedList, PriorityQueue</td><td>Hàng đợi (vào trước ra trước)</td></tr>
</table>

<h3>6.2 Generics</h3>
<p>Generics cho phép chỉ rõ kiểu dữ liệu chứa trong collection bằng cú pháp <code>&lt;Kiểu&gt;</code>, giúp phát hiện lỗi kiểu lúc biên dịch. Kiểu phải là lớp bao (wrapper): <code>Integer</code>, <code>Double</code>, <code>Character</code>, <code>Boolean</code>...</p>
<pre>ArrayList&lt;Integer&gt; ds = new ArrayList&lt;&gt;();   // đúng
// ArrayList&lt;int&gt; sai vì int là kiểu nguyên thủy</pre>

<h3>6.3 ArrayList</h3>
<pre>ArrayList&lt;String&gt; ds = new ArrayList&lt;&gt;();
ds.add("An");  ds.add("Binh");  ds.add(1, "Chi");   // thêm vào vị trí 1
System.out.println(ds.get(0));      // An
ds.set(0, "Anh");                   // sửa
ds.remove("Binh");                  // xóa theo giá trị
ds.remove(0);                       // xóa theo chỉ số
System.out.println(ds.size() + " " + ds.contains("Chi") + " " + ds.isEmpty());
for (String s : ds) System.out.println(s);</pre>

<h3>6.4 HashSet</h3>
<pre>HashSet&lt;Integer&gt; st = new HashSet&lt;&gt;();
st.add(3); st.add(5); st.add(3);    // phần tử 3 thứ hai bị bỏ qua
System.out.println(st.size());      // 2
System.out.println(st.contains(5)); // true</pre>
<p>Dùng HashSet để <b>loại bỏ phần tử trùng</b> hoặc kiểm tra tồn tại nhanh.</p>

<h3>6.5 HashMap</h3>
<pre>HashMap&lt;String, Integer&gt; diem = new HashMap&lt;&gt;();
diem.put("An", 9);
diem.put("Binh", 7);
diem.put("An", 10);                  // khóa trùng: ghi đè giá trị cũ
System.out.println(diem.get("An"));  // 10
System.out.println(diem.getOrDefault("Chi", 0));   // 0
for (String k : diem.keySet())
    System.out.println(k + " = " + diem.get(k));
for (Map.Entry&lt;String, Integer&gt; e : diem.entrySet())
    System.out.println(e.getKey() + " -> " + e.getValue());</pre>
<p><b>Ví dụ đếm tần suất từ:</b></p>
<pre>String[] tu = "a b a c b a".split(" ");
HashMap&lt;String, Integer&gt; dem = new HashMap&lt;&gt;();
for (String t : tu) dem.put(t, dem.getOrDefault(t, 0) + 1);
// {a=3, b=2, c=1}</pre>

<h3>6.6 Sắp xếp với Collections và Comparator</h3>
<pre>ArrayList&lt;Integer&gt; a = new ArrayList&lt;&gt;(Arrays.asList(5, 2, 8, 1));
Collections.sort(a);                         // [1, 2, 5, 8]
Collections.reverse(a);                      // [8, 5, 2, 1]
System.out.println(Collections.max(a));      // 8

// Sắp xếp đối tượng theo tiêu chí bất kỳ
ArrayList&lt;SinhVien&gt; ds = new ArrayList&lt;&gt;();
ds.sort((x, y) -> x.getTuoi() - y.getTuoi());           // lambda
ds.sort(Comparator.comparing(SinhVien::getTen));        // theo tên</pre>

<h3>6.7 Duyệt bằng Iterator</h3>
<p>Muốn xóa phần tử khi đang duyệt phải dùng <code>Iterator</code>, nếu không sẽ gặp <code>ConcurrentModificationException</code>.</p>
<pre>Iterator&lt;Integer&gt; it = a.iterator();
while (it.hasNext()) {
    if (it.next() % 2 == 0) it.remove();    // xóa các số chẵn
}</pre>

<h3>6.8 Chọn cấu trúc dữ liệu phù hợp</h3>
<ul>
<li>Cần truy cập theo chỉ số, thêm cuối nhiều → <b>ArrayList</b>.</li>
<li>Cần loại trùng / kiểm tra tồn tại → <b>HashSet</b>.</li>
<li>Cần tra cứu theo khóa (tên → điểm, mã → sản phẩm) → <b>HashMap</b>.</li>
<li>Cần dữ liệu luôn được sắp xếp → <b>TreeSet / TreeMap</b>.</li>
</ul>

<h3>6.9 Lỗi thường gặp</h3>
<ul>
<li>Dùng <code>ArrayList&lt;int&gt;</code> thay vì <code>ArrayList&lt;Integer&gt;</code>.</li>
<li>Nhầm <code>remove(int index)</code> và <code>remove(Object o)</code> với ArrayList&lt;Integer&gt;: <code>a.remove(Integer.valueOf(3))</code> mới xóa giá trị 3.</li>
<li>Lấy phần tử với chỉ số ngoài khoảng → <code>IndexOutOfBoundsException</code>.</li>
<li>Giả định HashMap/HashSet giữ nguyên thứ tự thêm vào (không đảm bảo).</li>
</ul>
<div class="note"><b>Tóm tắt:</b> ArrayList cho danh sách linh hoạt, HashSet loại trùng, HashMap lưu cặp khóa - giá trị; Collections.sort và Comparator để sắp xếp; luôn dùng generics với kiểu lớp bao.</div>`,
ex:[['Dễ','Thêm các số 1..5 vào ArrayList rồi in tổng.','ArrayList<Integer> a=new ArrayList<>();for(int i=1;i<=5;i++)a.add(i);\nint s=0;for(int x:a)s+=x;System.out.println(s);'],['Trung bình','Nhập n số, dùng HashSet đếm số lượng phần tử khác nhau.','HashSet<Integer> st=new HashSet<>();for(int i=0;i<n;i++)st.add(sc.nextInt());\nSystem.out.println(st.size());'],['Khá','Nhập một dòng chữ, dùng HashMap đếm số lần xuất hiện của mỗi từ.','HashMap<String,Integer> m=new HashMap<>();\nfor(String t:line.split(" "))m.put(t,m.getOrDefault(t,0)+1);\nfor(String k:m.keySet())System.out.println(k+" "+m.get(k));'],['Khó','Sắp xếp danh sách sinh viên giảm dần theo điểm bằng Comparator.','ds.sort((x,y)->Double.compare(y.diem,x.diem));\nfor(SV s:ds)System.out.println(s.ten+" "+s.diem);']]}];
const $=id=>document.getElementById(id);
function nav(){document.body.insertAdjacentHTML('afterbegin','<nav><a href="index.html">🏠 Trang chủ</a><a href="phan1.html">Phần 1</a>'+CH.map((c,i)=>`<a href="chuong.html?c=${i}">Chương ${i+1}</a>`).join('')+'<a href="thuchanh.html">Thực hành</a><a href="about.html">Phần 2</a></nav>')}
function chuong(){const i=+new URLSearchParams(location.search).get('c')||0,c=CH[i];
$('app').innerHTML=`<h1>${c.t}</h1><div class="card"><h2>Lý thuyết</h2>${c.th}</div><h2>Bài tập (4 mức)</h2>`+c.ex.map((e,k)=>`<div class="card"><span class="tag l${k}">Mức ${k+1}: ${e[0]}</span> ${e[1]}<details><summary>Xem lời giải</summary><pre>${e[2].replace(/</g,'&lt;')}</pre></details></div>`).join('')}
