function disable_box(state) {
    $("#genero").attr("disabled", state);
}

$(document).ready(function () {
    console.log('ready');

    $.ajax({
        url: 'http://localhost:5000/musicfy/listarGenero',
        beforeSend: () => {
            console.log(`before send`);
            disable_box(true);
        }
    }).done(result => {
        console.log(`received results: ${JSON.stringify(result)}`);
        $.each(result, function (indice, genero) {
            console.log(`each genero: ${JSON.stringify(genero)}`);
            $("#genero").append(`<option value="` + genero.genero_id + `">` + genero.descricao + `</option>`);
        });
    }).fail((err) => {
        alert(`Erro: ${JSON.stringify(err)}`);
    }).always(() => {
        disable_box(false);
    });

    $("#genero").change(() => {
        //$("#tabela > tbody").empty();
        $("#lista").empty();

        var genero_id = $( "#genero option:selected" ).val();
        console.log(`genero_id selected: ${genero_id}`);

        $.ajax({
            url: 'http://localhost:5000/musicfy/buscarMusicaPorGenero?genero_id=' + genero_id,
            beforeSend: () => {
                disable_box(true);
            }
        }).done(result => {
            console.log(`received results: ${JSON.stringify(result)}`);
            $.each(result, function (indice, musica) {
                $("#lista").append(`<ul>`
                    + `<li> Música nº: ` + musica.musica_id + `</td>`
                    + `<ul>`
                    + `<li>` + musica.titulo + `ml</td>`
                    + `<li>` + musica.artista + `</td>`
                    + `</ul>`
                    + `</ul>`);
            });
        }).fail((err) => {
            alert(`Erro: ${JSON.stringify(err)}`);
        }).always(() => {
            disable_box(false);
        });
    });
});
