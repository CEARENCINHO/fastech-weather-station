export function converterParaHoraMT(isoString) {
    const dataObj = new Date(isoString);

    // Formatar a data para o padrão brasileiro (DD/MM/AAAA) no fuso de MT
    const dataFormatada = dataObj.toLocaleDateString('pt-BR', {
        timeZone: 'America/Cuiaba'
    });

    // Formatar a hora (HH:MM:SS) no fuso de MT
    const horaFormatada = dataObj.toLocaleTimeString('pt-BR', {
        timeZone: 'America/Cuiaba'
    });

    return {
        data: dataFormatada,
        hora: horaFormatada
    };
}

// Exemplo de uso:
const jsonTime = "2026-10-31T07:51:00.594Z";
const resultado = converterParaHoraMT(jsonTime);

console.log(resultado.data); // Ex: "31/10/2026"
console.log(resultado.hora); // Ex: "03:51:00" (ajustado para o fuso de MT)