# 📦 Kargo Takip Otomasyon Sistemi

Bu proje, müşterilerin kargo gönderisi oluşturabileceği ve gönderi durumlarını takip edebileceği, admin kullanıcıların ise bu gönderilerin durumlarını yönetebileceği tam özellikli bir web tabanlı otomasyon sistemidir.

## 🔧 Kullanılan Teknolojiler

- **Frontend:** React.js, CSS
- **Backend:** Node.js, Express.js
- **Veritabanı:** MongoDB (Mongoose ODM)
- **Kimlik Doğrulama:** JWT (JSON Web Token)
- **Şifre Güvenliği:** bcryptjs

---

## 🧰 Klasör Yapısı

```
kargo-firmasi-otomasyon/
├── client/               # React uygulaması
│   ├── src/pages/        # Sayfa bileşenleri (Login, Panel, Admin)
│   ├── src/components/   # Ortak bileşenler (Sidebar, ProtectedRoute)
│   └── styles/           # CSS dosyaları
├── server/               # Node.js sunucu
│   ├── models/           # Mongoose modelleri
│   ├── routes/           # API uç noktaları
│   └── middlewares/      # Token doğrulama
```

---

## 🗃️ MongoDB Koleksiyonları

- `musteris`: ad, soyad, email, şifre, rol, adres, telefon
- `gonderis`: aliciAd, aliciAdres, durum, subeId, musteriId
- `subes`: ad, şehir
- `aracs`: plaka, kapasite, subeId
- `takipolayis`: gonderiId, açıklama, konum, zaman

---

## 👥 Roller & Giriş

- **Müşteri:**  
  Gönderi oluşturabilir, gönderilerini ve durumlarını görebilir.

- **Admin:**  
  Tüm gönderileri görüp durumlarını güncelleyebilir.

---

## ▶️ Kurulum

1. Projeyi klonlayın:

   ```bash
   git clone https://github.com/kullaniciadi/kargo-firmasi-otomasyon.git
   cd kargo-firmasi-otomasyon
   ```

2. Bağımlılıkları yükleyin:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

3. Sunucuyu başlatın:

   ```bash
   cd server
   npm run dev
   ```

4. React uygulamasını başlatın:
   ```bash
   cd client
   npm start
   ```

---

## 🧠 Geliştirici Notu

Bu proje, VTYS 25. grup proje ödevi olarak tasarlanmıştır. Projede kullanıcı dostu arayüz, veri doğrulama, JWT tabanlı güvenlik ve esnek veritabanı yapısı hedeflenmiştir.

Pull request ve katkılar memnuniyetle karşılanır!

---

## 📎 Lisans

MIT Lisansı
