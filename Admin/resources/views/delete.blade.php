<html>
    <head>
        <title>Konfirmasi delete</title>
    </head>
    <body>
        {{#results}}
        <form action='/pesan/hapus/{{ id }}' method='post'>
            <div>
                <strong>Yakin?</strong>
                <button type="submit">Iyaa</button>
            </div>
        </form>
        {{/results}}
    </body>
</html>