import axios from "axios";
export class SentimentAnalysisProvider {
  async execute(content: string[], API_KEY: string): Promise<any> {
    const { data } = await axios.post("http://127.0.0.1:5000/davinci", {
      content: content,
      api_key: API_KEY,
    });
    return data;
  }
}
