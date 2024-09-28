function contarRegressivamente(criadoEm, finalEm, setTextEnd) {
  const criadoDate = new Date(criadoEm);
  const finalDate = new Date(finalEm);

  const diferença = finalDate - criadoDate;

  if (diferença <= 0) {
    setTextEnd('Encerrado');
    return;
  }

  let tempoRestante = Math.floor(diferença / 1000);

  const interval = setInterval(() => {
    if (tempoRestante <= 0) {
      clearInterval(interval);
      setTextEnd('Encerrado');
      return;
    }

    const horas = Math.floor(tempoRestante / 3600);
    const minutos = Math.floor((tempoRestante % 3600) / 60);
    const segundos = tempoRestante % 60;

    const formatarTempo = (valor) => String(valor).padStart(2, '0');

    setTextEnd(`${formatarTempo(horas)}h ${formatarTempo(minutos)}m ${formatarTempo(segundos)}s`);

    tempoRestante--;
  }, 1000);

  return () => clearInterval(interval); // Limpar o intervalo ao desmontar
}

export default contarRegressivamente