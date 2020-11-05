<html>
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
        <title>Pesan Klien</title>
        <link rel="stylesheet" type="text/css" href="{{ asset('./css/style.css') }}">
    </head>
    <body>
        <header>
            <a href="/index"><img src="{{ asset('./img/logo-ibis.png') }}"></img></a>
        </header>
        <container>
            <div class="title-inbox">
                <h3>Kotak Masuk</h3>
            </div>
            @foreach($pesan_klien as $pk)
            <div class="slide-inbox-client">
                <div class="descript-option">
                    <div class="descript-sender">
                        <p><b>Nama Pengirim &emsp;:</b> {{ $pk -> nama_kontak }}</p>
                        <p><b>Email &emsp;&emsp;&emsp;&emsp;&emsp;&ensp;: </b> {{ $pk -> email}}</p>
                        <p><b>Tanggal &emsp;&emsp;&emsp;&emsp;&ensp;:</b> {{ $pk -> createdAt}}</p>
                    </div>
                    <div class="option">
                        <a class="btn btn-success" href='/inbox/delete/{{ $pk->id }}' role="button">
                            <img src="{{ asset('./img/trash.png') }}" class="trash-icon" alt="">
                        <span>Hapus</span>
                        </a>
                    </div>
                </div>    
                <p><b>Pesan : </b></p>
                <p>{{ $pk -> pesan }}</p>
            </div>
            @endforeach
        </container>
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
        <script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
    </body>
</html>