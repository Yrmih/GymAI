// Lista de exercícios mockados
const mockExercises = [
  {
    name: "Supino Reto",
    muscle: "Peitoral",
    tips: "Mantenha os cotovelos a 45 graus.",
    image: "https://via.placeholder.com/250x250.png?text=Supino+Reto",
  },
  {
    name: "Supino Inclinado",
    muscle: "Peitoral Superior",
    tips: "Incline levemente o tronco, não arqueie as costas.",
    image: "https://via.placeholder.com/250x250.png?text=Supino+Inclinado",
  },
  {
    name: "Agachamento Livre",
    muscle: "Quadríceps",
    tips: "Mantenha a coluna reta e joelhos alinhados aos pés.",
    image: "https://via.placeholder.com/250x250.png?text=Agachamento",
  },
  {
    name: "Leg Press",
    muscle: "Quadríceps",
    tips: "Não trave totalmente os joelhos no movimento.",
    image: "https://via.placeholder.com/250x250.png?text=Leg+Press",
  },
  {
    name: "Cadeira Extensora",
    muscle: "Quadríceps",
    tips: "Não estenda completamente o joelho para proteger as articulações.",
    image: "https://via.placeholder.com/250x250.png?text=Cadeira+Extensora",
  },
  {
    name: "Remada Curvada",
    muscle: "Dorsal",
    tips: "Não arqueie as costas e puxe com o cotovelo.",
    image: "https://via.placeholder.com/250x250.png?text=Remada+Curvada",
  },
  {
    name: "Puxada na Barra",
    muscle: "Dorsal",
    tips: "Concentre-se em puxar com as costas, não só com os braços.",
    image: "https://via.placeholder.com/250x250.png?text=Puxada+Barra",
  },
  {
    name: "Elevação Lateral",
    muscle: "Ombros",
    tips: "Mantenha os cotovelos levemente dobrados.",
    image: "https://via.placeholder.com/250x250.png?text=Elevação+Lateral",
  },
  {
    name: "Desenvolvimento Militar",
    muscle: "Ombros",
    tips: "Evite arquear as costas, concentre no movimento dos ombros.",
    image:
      "https://via.placeholder.com/250x250.png?text=Desenvolvimento+Militar",
  },
  {
    name: "Rosca Bíceps",
    muscle: "Bíceps",
    tips: "Evite balançar o corpo, concentre o esforço no braço.",
    image: "https://via.placeholder.com/250x250.png?text=Rosca+Biceps",
  },
  {
    name: "Rosca Martelo",
    muscle: "Bíceps/Braquial",
    tips: "Segure neutro, cotovelos fixos ao lado do corpo.",
    image: "https://via.placeholder.com/250x250.png?text=Rosca+Martelo",
  },
  {
    name: "Tríceps Testa",
    muscle: "Tríceps",
    tips: "Não arqueie os cotovelos para trás.",
    image: "https://via.placeholder.com/250x250.png?text=Tríceps+Testa",
  },
  {
    name: "Mergulho (Dip)",
    muscle: "Tríceps",
    tips: "Desça lentamente, cotovelos alinhados.",
    image: "https://via.placeholder.com/250x250.png?text=Mergulho+Dip",
  },
  {
    name: "Abdominal Infra",
    muscle: "Abdômen",
    tips: "Mantenha lombar encostada no chão.",
    image: "https://via.placeholder.com/250x250.png?text=Abdominal+Infra",
  },
  {
    name: "Prancha",
    muscle: "Abdômen",
    tips: "Contraia abdômen e glúteos, coluna neutra.",
    image: "https://via.placeholder.com/250x250.png?text=Prancha",
  },
  {
    name: "Stiff",
    muscle: "Posterior de Coxa",
    tips: "Mantenha joelhos levemente flexionados, coluna reta.",
    image: "https://via.placeholder.com/250x250.png?text=Stiff",
  },
  {
    name: "Levantamento Terra",
    muscle: "Costas/Posterior de Coxa",
    tips: "Não arqueie as costas, suba com quadril e joelhos.",
    image: "https://via.placeholder.com/250x250.png?text=Levantamento+Terra",
  },
  {
    name: "Panturrilha em Pé",
    muscle: "Panturrilhas",
    tips: "Suba na ponta dos pés devagar, controle o movimento.",
    image: "https://via.placeholder.com/250x250.png?text=Panturrilha",
  },
  {
    name: "Panturrilha Sentado",
    muscle: "Panturrilhas",
    tips: "Contraia ao subir, alongue ao descer.",
    image: "https://via.placeholder.com/250x250.png?text=Panturrilha+Sentado",
  },
];

export async function analyzeExerciseMock(uri: string) {
  // Simula tempo de processamento
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // Retorna um exercício aleatório para testes
  const randomIndex = Math.floor(Math.random() * mockExercises.length);
  return mockExercises[randomIndex];
}
