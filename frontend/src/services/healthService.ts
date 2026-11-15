import api from "./api";

export interface HealthResponse {
    application: string;
    status: string;
    message: string;
}

export const checkBackendHealth = async (): Promise<HealthResponse> => {
    const response = await api.get<HealthResponse>("/health");
    return response.data;
};