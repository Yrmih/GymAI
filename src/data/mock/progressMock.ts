
// Resumo — topo da tela
export const progressSummaryMock = {
  treinosConcluidos: 42,
  consistencia: 86,
  aparelhosUnicos: 12,
};

// Evolução de Peso Corporal
export const weeklyFrequencyMock = [
  { label: "JAN", value: 82 },
  { label: "FEV", value: 81.2 },
  { label: "MAR", value: 80.4 },
  { label: "ABR", value: 79.8 },
  { label: "MAI", value: 79.1 },
  { label: "JUN", value: 78.5 },
];

// "Coleção de Aparelhos" — estilo Pokédex
export const machinesCollectionMock = [
  {
    id: "supino-reto",
    name: "Supino Reto",
    used: true,
    lastUsed: "2025-11-15",
  },
  {
    id: "puxada-frontal",
    name: "Puxada na Polia",
    used: true,
    lastUsed: "2025-11-12",
  },
  {
    id: "leg-press",
    name: "Leg Press",
    used: true,
    lastUsed: "2025-11-10",
  },
  {
    id: "agachamento-smith",
    name: "Smith Machine",
    used: false,
  },
  {
    id: "cadeira-extensora",
    name: "Cadeira Extensora",
    used: false,
  },
];

// Atividades Recentes — simplificadas
export const recentActivitiesMock = [
  {
    id: 1,
    date: "2025-11-15",
    machine: "Supino Reto",
    status: "Concluído",
  },
  {
    id: 2,
    date: "2025-11-12",
    machine: "Puxada na Polia",
    status: "Concluído",
  },
  {
    id: 3,
    date: "2025-11-10",
    machine: "Leg Press",
    status: "Concluído",
  },
];
