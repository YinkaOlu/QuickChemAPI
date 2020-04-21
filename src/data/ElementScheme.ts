import mongoose, { Schema, Document } from 'mongoose';

export interface ChemElement extends Document {
    symbol: string
    appearance: string
    atomic_number: string
    group: string
    period: string
    element_category: string
    standard_atomic_weight: string
    electron_configuration: string
    per_shell: string
    phase: string
    melting_point: string
    boiling_point: string
    density: string
    heat_of_fusion: string
    heat_of_vaporization: string
    molar_heat_capacity: string
    ionization_energies: string
    covalent_radius: string
    crystal_structure: string
    discovery: string
    summary: string
}

const ElementSchema: Schema = new Schema({
    symbol: String,
    appearance: String,
    atomic_number: String,
    group: String,
    period: String,
    element_category: String,
    standard_atomic_weight: String,
    electron_configuration: String,
    per_shell: String,
    phase: String,
    melting_point: String,
    boiling_point: String,
    density: String,
    heat_of_fusion: String,
    heat_of_vaporization: String,
    molar_heat_capacity: String,
    ionization_energies: String,
    covalent_radius: String,
    crystal_structure: String,
    discovery: String,
    summary: String
});

export default mongoose.model<ChemElement>("Element", ElementSchema)