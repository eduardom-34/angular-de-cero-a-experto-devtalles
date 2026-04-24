import { Component, inject, resource, signal } from '@angular/core';
import { SearchInputComponent } from "../../components/search-input/search-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { Country } from '../../interfaces/country.interface';
import { CountryService } from '../../services/country.service';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countries = signal<Country[]>([]);

  countryService = inject(CountryService);
  query = signal('');

  countryResources = resource({
    request: () => ({ query: this.query()}),
    loader: async({ request }) => {
      if( !request.query) return

      return await firstValueFrom(
        this.countryService.searchByCountry(request.query)
      )
    }
  })
}
