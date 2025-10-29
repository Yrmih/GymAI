# Fluxo N8N + IA Vision - GymAI

## 1️⃣ App (React Native)
- Usuário tira foto do aparelho/exercício
- Converte imagem para Base64
- Envia para webhook do N8N

## 2️⃣ N8N
- Webhook recebe imagem
- HTTP Request envia para IA Vision (OpenAI, Replicate, Gemini, etc)
- Function Node formata resposta JSON:
  ```json
  {
    "name": "Supino Reto",
    "muscle": "Peitoral",
    "tips": "Mantenha os cotovelos a 45 graus.",
    "image": "https://url-da-imagem"
  }

## // Enviar imagem para N8N + IA
  async function sendToIA(uri: string) {
    setLoading(true);
    try {
      const response = await fetch("https://seu-n8n-endpoint/analyze-exercise", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ image: await toBase64(uri) }),
      });

      const data = await response.json();

      // Navegar para ExerciseDetails passando os dados retornados
      router.push({
        pathname: "/exercise-details",
        params: data,
      });
    } catch (error) {
      console.error("Erro ao enviar para IA:", error);
    } finally {
      setLoading(false);
    }
  }
