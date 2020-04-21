import elementsJSON from "./elements.json"

export class ChemElement {
    symbol: string | undefined
    appearance: string | undefined
    atomic_number: string | undefined
    group: string | undefined
    period: string | undefined
    element_category: string | undefined
    standard_atomic_weight: string | undefined
    electron_configuration: string | undefined
    per_shell: string | undefined
    phase: string | undefined
    melting_point: string | undefined
    boiling_point: string | undefined
    density: string | undefined
    heat_of_fusion: string | undefined
    heat_of_vaporization: string | undefined
    molar_heat_capacity: string | undefined
    ionization_energies: string | undefined
    covalent_radius: string | undefined
    crystal_structure: string | undefined
    discovery: string | undefined
    summary: string | undefined
}

export class ElementSource {
    getElements(): ChemElement[] {
        const elements: ChemElement[] = []
        console.log("+++ Elements +++")
        console.log(elements)
        Object.assign(elements, elementsJSON)
        return elements
    }
}