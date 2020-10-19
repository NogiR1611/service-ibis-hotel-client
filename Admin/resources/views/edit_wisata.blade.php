<html>
    <head>
        <title>Edit Data Wisata</title>
        <link rel="stylesheet" href="./stylesheets/style.css">
    </head>
    <body>
        <header>
            <a href="/"><img src="./image_wisata/logo-ibis.png"></img></a>
        </header>
        <div class="card">
            <div class="card-title">
                <h2>Silahkan lakukan perubahan terhadap Tempat Wisata yang telah di pilih</h2>
            </div>
            {{#results}}
                <form action='/update/{{ id }}' method='post'>
                    <label>Nama tempat wisata : </label></br>
                    <input type="text" name="nama_tempat_wisata"></br>
                    <label>Lokasi : </label></br>
                    <input type="text" name="lokasi"></br>
                    <label>Harga : </label></br>
                    <input type="text" name="harga"></br>
                    <label>URL Foto : </label></br>
                    <input type="file" name="urlimage"></br>
                    <label>Deskripsi : </label></br>
                    <textarea cols="80" rows="20" name="deskripsi"></textarea></br>
                    <button type="submit" class="button-confirm">Update</button>
                </form>
            {{/results}}
        </div>
    </body>
    <footer>
        <div className="bottom-footer">
            <p>&copy; Ibis Hotel <span id="years"></span> Made by nogi with <span class="heart-icon">&hearts;</span></p> 
        </div>
    </footer>
    <script>
        let time = new Date();
        let years = time.getFullYear();
        document.getElementById("years").innerHTML = years;
    </script>
</html>